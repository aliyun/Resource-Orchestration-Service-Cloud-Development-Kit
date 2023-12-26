using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::GroupMetricRule`, which is used to create an alert rule for an application group.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `GroupMetricRule` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-groupmetricrule
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosGroupMetricRule", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosGroupMetricRule : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosGroupMetricRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.IRosGroupMetricRuleProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.IRosGroupMetricRuleProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosGroupMetricRule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosGroupMetricRule(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule))!;

        /// <remarks>
        /// <strong>Attribute</strong>: RuleId: Rule ID.
        /// </remarks>
        [JsiiProperty(name: "attrRuleId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRuleId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: category: The abbreviation of the service name. Valid values:
        /// ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
        /// RDS (ApsaraDB for RDS)
        /// ADS (AnalyticDB)
        /// SLB (Server Load Balancer)
        /// VPC (Virtual Private Cloud)
        /// APIGATEWAY (API Gateway)
        /// CDN
        /// CS (Container Service for Swarm)
        /// DCDN (Dynamic Route for CDN)
        /// DDoS (distributed denial of service)
        /// EIP (Elastic IP)
        /// ELASTICSEARCH (Elasticsearch)
        /// EMR (E-MapReduce)
        /// ESS (Auto Scaling)
        /// HBASE (ApsaraDB for HBase)
        /// IOT_EDGE (IoT Edge)
        /// K8S_POD (k8s pod)
        /// KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
        /// KVSTORE_SPLITRW (ApsaraDB for Redis read\/write splitting version)
        /// KVSTORE_STANDARD (ApsaraDB for Redis standard version)
        /// MEMCACHE (ApsaraDB for Memcache)
        /// MNS (Message Service)
        /// MONGODB (ApsaraDB for MongoDB replica set instances)
        /// MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
        /// MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
        /// MQ_TOPIC (Message Service topic)
        /// OCS (original version of ApsaraDB for Memcache)
        /// OPENSEARCH (Open Search)
        /// OSS (Object Storage Service)
        /// POLARDB (ApsaraDB for POLARDB)
        /// PETADATA (HybridDB for MySQL)
        /// SCDN (Secure Content Delivery Network)
        /// SHAREBANDWIDTHPACKAGES (shared bandwidth package)
        /// SLS (Log Service)
        /// VPN (VPN Gateway)
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Category
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
        /// <strong>Property</strong>: escalations: undefined
        /// </remarks>
        [JsiiProperty(name: "escalations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRule.EscalationsProperty\"}]}}")]
        public virtual object Escalations
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IEscalationsProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IEscalationsProperty).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IEscalationsProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The ID of application group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object GroupId
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
        /// <strong>Property</strong>: metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
        /// </remarks>
        [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object MetricName
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
        /// <strong>Property</strong>: namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
        /// or see Preset metrics reference.
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Namespace
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
        /// <strong>Property</strong>: ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
        /// uniqueness.
        /// </remarks>
        [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object RuleId
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
        /// <strong>Property</strong>: ruleName: The name of the alert rule.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object RuleName
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
        /// <strong>Property</strong>: dimensions: The expended resource dimensions.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Dimensions
        {
            get => GetInstanceProperty<object?>();
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
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: effectiveInterval: The period when the alert rule is effective.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "effectiveInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EffectiveInterval
        {
            get => GetInstanceProperty<object?>();
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
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: emailSubject: The subject of the alert notification email.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "emailSubject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EmailSubject
        {
            get => GetInstanceProperty<object?>();
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
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: interval: The detection period of alerts.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Interval
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
        /// <strong>Property</strong>: noEffectiveInterval: The period when the alert rule is ineffective.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "noEffectiveInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? NoEffectiveInterval
        {
            get => GetInstanceProperty<object?>();
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
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The aggregation period. Unite: second.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Period
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
        /// <strong>Property</strong>: silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
        /// conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "silenceTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SilenceTime
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
        /// <strong>Property</strong>: webhook: The URL of the callback triggered when an alert occurs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "webhook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Webhook
        {
            get => GetInstanceProperty<object?>();
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
                SetInstanceProperty(value);
            }
        }
        [JsiiInterface(nativeType: typeof(ICriticalProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosGroupMetricRule.CriticalProperty")]
        public interface ICriticalProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for critical-level alerts. Valid values:
            /// GreaterThanOrEqualToThreshold
            /// GreaterThanThreshold
            /// LessThanOrEqualToThreshold
            /// LessThanThreshold
            /// NotEqualToThreshold
            /// GreaterThanYesterday
            /// LessThanYesterday
            /// GreaterThanLastWeek
            /// LessThanLastWeek
            /// GreaterThanLastPeriod
            /// LessThanLastPeriod
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ComparisonOperator
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for critical-level alerts. The statistical method varies with
            /// metric.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Statistics
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for critical-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Threshold
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value exceeds the threshold for
            /// critical-level alerts before an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Times
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ICriticalProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosGroupMetricRule.CriticalProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.ICriticalProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for critical-level alerts. Valid values:
                /// GreaterThanOrEqualToThreshold
                /// GreaterThanThreshold
                /// LessThanOrEqualToThreshold
                /// LessThanThreshold
                /// NotEqualToThreshold
                /// GreaterThanYesterday
                /// LessThanYesterday
                /// GreaterThanLastWeek
                /// LessThanLastWeek
                /// GreaterThanLastPeriod
                /// LessThanLastPeriod
                /// </remarks>
                [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ComparisonOperator
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: statistics: The statistical method for critical-level alerts. The statistical method varies with
                /// metric.
                /// </remarks>
                [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Statistics
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: threshold: The threshold for critical-level alerts.
                /// </remarks>
                [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Threshold
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: times: The consecutive number of times for which the metric value exceeds the threshold for
                /// critical-level alerts before an alert is triggered.
                /// </remarks>
                [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Times
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosGroupMetricRule.CriticalProperty")]
        public class CriticalProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.ICriticalProperty
        {
            private object _comparisonOperator;

            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for critical-level alerts. Valid values:
            /// GreaterThanOrEqualToThreshold
            /// GreaterThanThreshold
            /// LessThanOrEqualToThreshold
            /// LessThanThreshold
            /// NotEqualToThreshold
            /// GreaterThanYesterday
            /// LessThanYesterday
            /// GreaterThanLastWeek
            /// LessThanLastWeek
            /// GreaterThanLastPeriod
            /// LessThanLastPeriod
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComparisonOperator
            {
                get => _comparisonOperator;
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
                    _comparisonOperator = value;
                }
            }

            private object _statistics;

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for critical-level alerts. The statistical method varies with
            /// metric.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Statistics
            {
                get => _statistics;
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
                    _statistics = value;
                }
            }

            private object _threshold;

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for critical-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get => _threshold;
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
                    _threshold = value;
                }
            }

            private object _times;

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value exceeds the threshold for
            /// critical-level alerts before an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Times
            {
                get => _times;
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
                    _times = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IEscalationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosGroupMetricRule.EscalationsProperty")]
        public interface IEscalationsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: critical: undefined
            /// </remarks>
            [JsiiProperty(name: "critical", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRule.CriticalProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Critical
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: info: undefined
            /// </remarks>
            [JsiiProperty(name: "info", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRule.InfoProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Info
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: warn: undefined
            /// </remarks>
            [JsiiProperty(name: "warn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRule.WarnProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Warn
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IEscalationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosGroupMetricRule.EscalationsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IEscalationsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: critical: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "critical", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRule.CriticalProperty\"}]}}", isOptional: true)]
                public object? Critical
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: info: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "info", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRule.InfoProperty\"}]}}", isOptional: true)]
                public object? Info
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: warn: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "warn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRule.WarnProperty\"}]}}", isOptional: true)]
                public object? Warn
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosGroupMetricRule.EscalationsProperty")]
        public class EscalationsProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IEscalationsProperty
        {
            private object? _critical;

            /// <remarks>
            /// <strong>Property</strong>: critical: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "critical", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRule.CriticalProperty\"}]}}", isOptional: true)]
            public object? Critical
            {
                get => _critical;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.ICriticalProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.ICriticalProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _critical = value;
                }
            }

            private object? _info;

            /// <remarks>
            /// <strong>Property</strong>: info: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "info", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRule.InfoProperty\"}]}}", isOptional: true)]
            public object? Info
            {
                get => _info;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IInfoProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IInfoProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _info = value;
                }
            }

            private object? _warn;

            /// <remarks>
            /// <strong>Property</strong>: warn: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "warn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRule.WarnProperty\"}]}}", isOptional: true)]
            public object? Warn
            {
                get => _warn;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IWarnProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IWarnProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _warn = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosGroupMetricRule.InfoProperty")]
        public interface IInfoProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for info-level alerts. Valid values:
            /// GreaterThanOrEqualToThreshold
            /// GreaterThanThreshold
            /// LessThanOrEqualToThreshold
            /// LessThanThreshold
            /// NotEqualToThreshold
            /// GreaterThanYesterday
            /// LessThanYesterday
            /// GreaterThanLastWeek
            /// LessThanLastWeek
            /// GreaterThanLastPeriod
            /// LessThanLastPeriod
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ComparisonOperator
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for info-level alerts.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Statistics
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for info-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Threshold
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value exceeds the threshold for
            /// info-level alerts before an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Times
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosGroupMetricRule.InfoProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IInfoProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for info-level alerts. Valid values:
                /// GreaterThanOrEqualToThreshold
                /// GreaterThanThreshold
                /// LessThanOrEqualToThreshold
                /// LessThanThreshold
                /// NotEqualToThreshold
                /// GreaterThanYesterday
                /// LessThanYesterday
                /// GreaterThanLastWeek
                /// LessThanLastWeek
                /// GreaterThanLastPeriod
                /// LessThanLastPeriod
                /// </remarks>
                [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ComparisonOperator
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: statistics: The statistical method for info-level alerts.
                /// </remarks>
                [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Statistics
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: threshold: The threshold for info-level alerts.
                /// </remarks>
                [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Threshold
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: times: The consecutive number of times for which the metric value exceeds the threshold for
                /// info-level alerts before an alert is triggered.
                /// </remarks>
                [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Times
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosGroupMetricRule.InfoProperty")]
        public class InfoProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IInfoProperty
        {
            private object _comparisonOperator;

            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for info-level alerts. Valid values:
            /// GreaterThanOrEqualToThreshold
            /// GreaterThanThreshold
            /// LessThanOrEqualToThreshold
            /// LessThanThreshold
            /// NotEqualToThreshold
            /// GreaterThanYesterday
            /// LessThanYesterday
            /// GreaterThanLastWeek
            /// LessThanLastWeek
            /// GreaterThanLastPeriod
            /// LessThanLastPeriod
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComparisonOperator
            {
                get => _comparisonOperator;
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
                    _comparisonOperator = value;
                }
            }

            private object _statistics;

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for info-level alerts.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Statistics
            {
                get => _statistics;
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
                    _statistics = value;
                }
            }

            private object _threshold;

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for info-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get => _threshold;
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
                    _threshold = value;
                }
            }

            private object _times;

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value exceeds the threshold for
            /// info-level alerts before an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Times
            {
                get => _times;
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
                    _times = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IWarnProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosGroupMetricRule.WarnProperty")]
        public interface IWarnProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for warn-level alerts. Valid values:
            /// GreaterThanOrEqualToThreshold
            /// GreaterThanThreshold
            /// LessThanOrEqualToThreshold
            /// LessThanThreshold
            /// NotEqualToThreshold
            /// GreaterThanYesterday
            /// LessThanYesterday
            /// GreaterThanLastWeek
            /// LessThanLastWeek
            /// GreaterThanLastPeriod
            /// LessThanLastPeriod
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ComparisonOperator
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for warn-level alerts.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Statistics
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for warn-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Threshold
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value exceeds the threshold for
            /// warn-level alerts before an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Times
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IWarnProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosGroupMetricRule.WarnProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IWarnProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for warn-level alerts. Valid values:
                /// GreaterThanOrEqualToThreshold
                /// GreaterThanThreshold
                /// LessThanOrEqualToThreshold
                /// LessThanThreshold
                /// NotEqualToThreshold
                /// GreaterThanYesterday
                /// LessThanYesterday
                /// GreaterThanLastWeek
                /// LessThanLastWeek
                /// GreaterThanLastPeriod
                /// LessThanLastPeriod
                /// </remarks>
                [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ComparisonOperator
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: statistics: The statistical method for warn-level alerts.
                /// </remarks>
                [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Statistics
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: threshold: The threshold for warn-level alerts.
                /// </remarks>
                [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Threshold
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: times: The consecutive number of times for which the metric value exceeds the threshold for
                /// warn-level alerts before an alert is triggered.
                /// </remarks>
                [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Times
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosGroupMetricRule.WarnProperty")]
        public class WarnProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosGroupMetricRule.IWarnProperty
        {
            private object _comparisonOperator;

            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The comparison operator of the threshold for warn-level alerts. Valid values:
            /// GreaterThanOrEqualToThreshold
            /// GreaterThanThreshold
            /// LessThanOrEqualToThreshold
            /// LessThanThreshold
            /// NotEqualToThreshold
            /// GreaterThanYesterday
            /// LessThanYesterday
            /// GreaterThanLastWeek
            /// LessThanLastWeek
            /// GreaterThanLastPeriod
            /// LessThanLastPeriod
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComparisonOperator
            {
                get => _comparisonOperator;
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
                    _comparisonOperator = value;
                }
            }

            private object _statistics;

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method for warn-level alerts.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Statistics
            {
                get => _statistics;
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
                    _statistics = value;
                }
            }

            private object _threshold;

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for warn-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get => _threshold;
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
                    _threshold = value;
                }
            }

            private object _times;

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value exceeds the threshold for
            /// warn-level alerts before an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Times
            {
                get => _times;
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
                    _times = value;
                }
            }
        }
    }
}
