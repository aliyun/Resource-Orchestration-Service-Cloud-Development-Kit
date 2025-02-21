using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::GA::ForwardingRules`, which is used to create forwarding rules.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `ForwardingRules` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-forwardingrules
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosForwardingRules", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ga.RosForwardingRulesProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosForwardingRules : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosForwardingRules(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ga.IRosForwardingRulesProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ga.IRosForwardingRulesProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosForwardingRules(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosForwardingRules(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ForwardingRuleIds: The IDs of the endpoint groups.
        /// </remarks>
        [JsiiProperty(name: "attrForwardingRuleIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrForwardingRuleIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the GA instance.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AcceleratorId
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
        /// <strong>Property</strong>: forwardingRules: Details about the forwarding rules.
        /// </remarks>
        [JsiiProperty(name: "forwardingRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosForwardingRules.ForwardingRulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object ForwardingRules
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
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IForwardingRulesProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IForwardingRulesProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IForwardingRulesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerId: The ID of the listener.
        /// </remarks>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ListenerId
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
        [JsiiInterface(nativeType: typeof(IForwardingRulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosForwardingRules.ForwardingRulesProperty")]
        public interface IForwardingRulesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ruleActions: The forwarding action.
            /// </remarks>
            [JsiiProperty(name: "ruleActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosForwardingRules.RuleActionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object RuleActions
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleConditions: The forwarding conditions.
            /// </remarks>
            [JsiiProperty(name: "ruleConditions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosForwardingRules.RuleConditionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object RuleConditions
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: forwardingRuleName: The name of the forwarding rule. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "forwardingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ForwardingRuleName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value indicates a higher priority.
            /// </remarks>
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Priority
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleDirection: The direction in which the rule takes effect. You do not need to set this parameter. By default, this parameter is set to request, which indicates that the rule takes effect on requests.
            /// </remarks>
            [JsiiProperty(name: "ruleDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RuleDirection
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IForwardingRulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosForwardingRules.ForwardingRulesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IForwardingRulesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: ruleActions: The forwarding action.
                /// </remarks>
                [JsiiProperty(name: "ruleActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosForwardingRules.RuleActionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object RuleActions
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: ruleConditions: The forwarding conditions.
                /// </remarks>
                [JsiiProperty(name: "ruleConditions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosForwardingRules.RuleConditionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object RuleConditions
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: forwardingRuleName: The name of the forwarding rule. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "forwardingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ForwardingRuleName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value indicates a higher priority.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Priority
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ruleDirection: The direction in which the rule takes effect. You do not need to set this parameter. By default, this parameter is set to request, which indicates that the rule takes effect on requests.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ruleDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RuleDirection
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosForwardingRules.ForwardingRulesProperty")]
        public class ForwardingRulesProperty : AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IForwardingRulesProperty
        {
            private object _ruleActions;

            /// <remarks>
            /// <strong>Property</strong>: ruleActions: The forwarding action.
            /// </remarks>
            [JsiiProperty(name: "ruleActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosForwardingRules.RuleActionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object RuleActions
            {
                get => _ruleActions;
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
                                        case AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IRuleActionsProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IRuleActionsProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IRuleActionsProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
                    _ruleActions = value;
                }
            }

            private object _ruleConditions;

            /// <remarks>
            /// <strong>Property</strong>: ruleConditions: The forwarding conditions.
            /// </remarks>
            [JsiiProperty(name: "ruleConditions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosForwardingRules.RuleConditionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object RuleConditions
            {
                get => _ruleConditions;
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
                                        case AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IRuleConditionsProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IRuleConditionsProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IRuleConditionsProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
                    _ruleConditions = value;
                }
            }

            private object? _forwardingRuleName;

            /// <remarks>
            /// <strong>Property</strong>: forwardingRuleName: The name of the forwarding rule. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forwardingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ForwardingRuleName
            {
                get => _forwardingRuleName;
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
                    _forwardingRuleName = value;
                }
            }

            private object? _priority;

            /// <remarks>
            /// <strong>Property</strong>: priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value indicates a higher priority.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => _priority;
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
                    _priority = value;
                }
            }

            private object? _ruleDirection;

            /// <remarks>
            /// <strong>Property</strong>: ruleDirection: The direction in which the rule takes effect. You do not need to set this parameter. By default, this parameter is set to request, which indicates that the rule takes effect on requests.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleDirection
            {
                get => _ruleDirection;
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
                    _ruleDirection = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IRuleActionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosForwardingRules.RuleActionsProperty")]
        public interface IRuleActionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: order: The forwarding priority.
            /// </remarks>
            [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Order
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleActionType: The type of the forwarding action. Valid values:
            /// * ForwardGroup: forwards a request.
            /// * Redirect: redirects a request.
            /// * FixResponse: returns a fixed response.
            /// * Rewrite: rewrites a request.
            /// * AddHeader: adds a header to a request.
            /// * RemoveHeaderConfig: deletes the header from a request.
            /// </remarks>
            [JsiiProperty(name: "ruleActionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object RuleActionType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleActionValue: The value of the forwarding action type. You must specify different JSON strings based on the RuleActionType parameter. A forwarding rule can contain only one forwarding action whose type is ForwardGroup, Redirect, or FixResponse. You must specify a forwarding action whose type is Rewrite, AddHeader, or RemoveHeader before a forwarding action whose type is ForwardGroup.
            /// * If RuleActionType is set to ForwardGroup, this parameter specifies the information of a virtual endpoint group. You can forward requests to only one virtual endpoint group. Example: {"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}.
            /// * type: set this parameter to endpointgroup.
            /// * value: set this parameter to the ID of a virtual endpoint group.
            /// * If RuleActionType is set to Redirect, this parameter specifies redirecting configurations. You cannot leave all of the following parameters empty or configure all of these parameters to use the default values for a forwarding action whose type is Redirect: protocol, domain, port, path, and query. Example: {"protocol":"HTTP", "domain":"www.example.com", "port":"80", "path":"\/a","query":"value1", "code":"301" }.
            /// * protocol: the protocol of requests after the requests are redirected. Valid values: ${protocol} (default), HTTP, and HTTPS.
            /// * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only letters, digits, and the following special characters: . - ? = ~ _ - + \/ ^ * ! $ & | ( ) [ ].
            /// * port: the port to which requests are redirected. Default value: ${port}. You can enter a port number that ranges from 1 to 63335.
            /// * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? :. The path must start with a forward slash (\/).
            /// * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
            /// * code: the redirecting code. Valid values: 301, 302, 303, 307, and 308.
            /// * If RuleActionType is set to FixResponse, this parameter specifies a fixed response. Example: {"code":"200", "type":"text\/plain", "content":"dssacav" }.
            /// * code: the HTTP status code to return. The response status code must be one of the following numeric strings: 2xx, 4xx, and 5xx. The letter x indicates a number from 0 to 9.
            /// * type: the type of the response content. Valid values: text\/plain, text\/css, text\/html, application\/javascript, and application\/json.
            /// * content: the response content. The response content cannot exceed 1,000 characters in length and does not support Chinese characters.
            /// * If RuleActionType is set to AddHeader, this parameter specifies an HTTP header to be added. If a forwarding rule contains a forwarding action whose type is AddHeader, you must specify another forwarding action whose type is ForwardGroup. Example: [{"name":"header1","type":"userdefined", "value":"value"}].
            /// * name: the name of the HTTP header. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The name of the HTTP header specified by AddHeader must be unique and cannot be the same as the name of the HTTP header specified by RemoveHeader.
            /// * type: the content type of the HTTP header. Valid values: user-defined, ref, and system-defined.
            /// * value: the content of the HTTP header. You cannot leave this parameter empty. If you set type to user-defined, the content must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The content can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to ref, the content must be 1 to 128 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to system-defined, only ClientSrcIp is supported.
            /// * If RuleActionType is set to RemoveHeader, this parameter specifies an HTTP header to be removed. If a forwarding rule contains a forwarding action whose type is RemoveHeader, you must specify another forwarding action whose type is ForwardGroup. The header must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). Example: ["header1"].
            /// * If RuleActionType is set to Rewrite, this parameter specifies the rewriting configuration. If a forwarding rule contains a forwarding action whose type is Rewrite, you must specify another forwarding action whose type is ForwardGroup. Example: {"domain":"value1", "path":"value2", "query":"value3"}.
            /// * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only lowercase letters, digits, and the following special characters: . - ? = ~ _ - + \/ ^ * ! $ & | ( ) [ ].
            /// * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? :. The path must start with a forward slash (\/).
            /// * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
            /// </remarks>
            [JsiiProperty(name: "ruleActionValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RuleActionValue
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRuleActionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosForwardingRules.RuleActionsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IRuleActionsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: order: The forwarding priority.
                /// </remarks>
                [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Order
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: ruleActionType: The type of the forwarding action. Valid values:
                /// * ForwardGroup: forwards a request.
                /// * Redirect: redirects a request.
                /// * FixResponse: returns a fixed response.
                /// * Rewrite: rewrites a request.
                /// * AddHeader: adds a header to a request.
                /// * RemoveHeaderConfig: deletes the header from a request.
                /// </remarks>
                [JsiiProperty(name: "ruleActionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object RuleActionType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: ruleActionValue: The value of the forwarding action type. You must specify different JSON strings based on the RuleActionType parameter. A forwarding rule can contain only one forwarding action whose type is ForwardGroup, Redirect, or FixResponse. You must specify a forwarding action whose type is Rewrite, AddHeader, or RemoveHeader before a forwarding action whose type is ForwardGroup.
                /// * If RuleActionType is set to ForwardGroup, this parameter specifies the information of a virtual endpoint group. You can forward requests to only one virtual endpoint group. Example: {"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}.
                /// * type: set this parameter to endpointgroup.
                /// * value: set this parameter to the ID of a virtual endpoint group.
                /// * If RuleActionType is set to Redirect, this parameter specifies redirecting configurations. You cannot leave all of the following parameters empty or configure all of these parameters to use the default values for a forwarding action whose type is Redirect: protocol, domain, port, path, and query. Example: {"protocol":"HTTP", "domain":"www.example.com", "port":"80", "path":"\/a","query":"value1", "code":"301" }.
                /// * protocol: the protocol of requests after the requests are redirected. Valid values: ${protocol} (default), HTTP, and HTTPS.
                /// * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only letters, digits, and the following special characters: . - ? = ~ _ - + \/ ^ * ! $ & | ( ) [ ].
                /// * port: the port to which requests are redirected. Default value: ${port}. You can enter a port number that ranges from 1 to 63335.
                /// * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? :. The path must start with a forward slash (\/).
                /// * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
                /// * code: the redirecting code. Valid values: 301, 302, 303, 307, and 308.
                /// * If RuleActionType is set to FixResponse, this parameter specifies a fixed response. Example: {"code":"200", "type":"text\/plain", "content":"dssacav" }.
                /// * code: the HTTP status code to return. The response status code must be one of the following numeric strings: 2xx, 4xx, and 5xx. The letter x indicates a number from 0 to 9.
                /// * type: the type of the response content. Valid values: text\/plain, text\/css, text\/html, application\/javascript, and application\/json.
                /// * content: the response content. The response content cannot exceed 1,000 characters in length and does not support Chinese characters.
                /// * If RuleActionType is set to AddHeader, this parameter specifies an HTTP header to be added. If a forwarding rule contains a forwarding action whose type is AddHeader, you must specify another forwarding action whose type is ForwardGroup. Example: [{"name":"header1","type":"userdefined", "value":"value"}].
                /// * name: the name of the HTTP header. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The name of the HTTP header specified by AddHeader must be unique and cannot be the same as the name of the HTTP header specified by RemoveHeader.
                /// * type: the content type of the HTTP header. Valid values: user-defined, ref, and system-defined.
                /// * value: the content of the HTTP header. You cannot leave this parameter empty. If you set type to user-defined, the content must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The content can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to ref, the content must be 1 to 128 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to system-defined, only ClientSrcIp is supported.
                /// * If RuleActionType is set to RemoveHeader, this parameter specifies an HTTP header to be removed. If a forwarding rule contains a forwarding action whose type is RemoveHeader, you must specify another forwarding action whose type is ForwardGroup. The header must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). Example: ["header1"].
                /// * If RuleActionType is set to Rewrite, this parameter specifies the rewriting configuration. If a forwarding rule contains a forwarding action whose type is Rewrite, you must specify another forwarding action whose type is ForwardGroup. Example: {"domain":"value1", "path":"value2", "query":"value3"}.
                /// * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only lowercase letters, digits, and the following special characters: . - ? = ~ _ - + \/ ^ * ! $ & | ( ) [ ].
                /// * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? :. The path must start with a forward slash (\/).
                /// * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ruleActionValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RuleActionValue
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosForwardingRules.RuleActionsProperty")]
        public class RuleActionsProperty : AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IRuleActionsProperty
        {
            private object _order;

            /// <remarks>
            /// <strong>Property</strong>: order: The forwarding priority.
            /// </remarks>
            [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Order
            {
                get => _order;
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
                    _order = value;
                }
            }

            private object _ruleActionType;

            /// <remarks>
            /// <strong>Property</strong>: ruleActionType: The type of the forwarding action. Valid values:
            /// * ForwardGroup: forwards a request.
            /// * Redirect: redirects a request.
            /// * FixResponse: returns a fixed response.
            /// * Rewrite: rewrites a request.
            /// * AddHeader: adds a header to a request.
            /// * RemoveHeaderConfig: deletes the header from a request.
            /// </remarks>
            [JsiiProperty(name: "ruleActionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleActionType
            {
                get => _ruleActionType;
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
                    _ruleActionType = value;
                }
            }

            private object? _ruleActionValue;

            /// <remarks>
            /// <strong>Property</strong>: ruleActionValue: The value of the forwarding action type. You must specify different JSON strings based on the RuleActionType parameter. A forwarding rule can contain only one forwarding action whose type is ForwardGroup, Redirect, or FixResponse. You must specify a forwarding action whose type is Rewrite, AddHeader, or RemoveHeader before a forwarding action whose type is ForwardGroup.
            /// * If RuleActionType is set to ForwardGroup, this parameter specifies the information of a virtual endpoint group. You can forward requests to only one virtual endpoint group. Example: {"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}.
            /// * type: set this parameter to endpointgroup.
            /// * value: set this parameter to the ID of a virtual endpoint group.
            /// * If RuleActionType is set to Redirect, this parameter specifies redirecting configurations. You cannot leave all of the following parameters empty or configure all of these parameters to use the default values for a forwarding action whose type is Redirect: protocol, domain, port, path, and query. Example: {"protocol":"HTTP", "domain":"www.example.com", "port":"80", "path":"\/a","query":"value1", "code":"301" }.
            /// * protocol: the protocol of requests after the requests are redirected. Valid values: ${protocol} (default), HTTP, and HTTPS.
            /// * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only letters, digits, and the following special characters: . - ? = ~ _ - + \/ ^ * ! $ & | ( ) [ ].
            /// * port: the port to which requests are redirected. Default value: ${port}. You can enter a port number that ranges from 1 to 63335.
            /// * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? :. The path must start with a forward slash (\/).
            /// * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
            /// * code: the redirecting code. Valid values: 301, 302, 303, 307, and 308.
            /// * If RuleActionType is set to FixResponse, this parameter specifies a fixed response. Example: {"code":"200", "type":"text\/plain", "content":"dssacav" }.
            /// * code: the HTTP status code to return. The response status code must be one of the following numeric strings: 2xx, 4xx, and 5xx. The letter x indicates a number from 0 to 9.
            /// * type: the type of the response content. Valid values: text\/plain, text\/css, text\/html, application\/javascript, and application\/json.
            /// * content: the response content. The response content cannot exceed 1,000 characters in length and does not support Chinese characters.
            /// * If RuleActionType is set to AddHeader, this parameter specifies an HTTP header to be added. If a forwarding rule contains a forwarding action whose type is AddHeader, you must specify another forwarding action whose type is ForwardGroup. Example: [{"name":"header1","type":"userdefined", "value":"value"}].
            /// * name: the name of the HTTP header. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The name of the HTTP header specified by AddHeader must be unique and cannot be the same as the name of the HTTP header specified by RemoveHeader.
            /// * type: the content type of the HTTP header. Valid values: user-defined, ref, and system-defined.
            /// * value: the content of the HTTP header. You cannot leave this parameter empty. If you set type to user-defined, the content must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The content can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to ref, the content must be 1 to 128 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space character. If you set type to system-defined, only ClientSrcIp is supported.
            /// * If RuleActionType is set to RemoveHeader, this parameter specifies an HTTP header to be removed. If a forwarding rule contains a forwarding action whose type is RemoveHeader, you must specify another forwarding action whose type is ForwardGroup. The header must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). Example: ["header1"].
            /// * If RuleActionType is set to Rewrite, this parameter specifies the rewriting configuration. If a forwarding rule contains a forwarding action whose type is Rewrite, you must specify another forwarding action whose type is ForwardGroup. Example: {"domain":"value1", "path":"value2", "query":"value3"}.
            /// * domain: the domain name to which requests are redirected. Default value: ${host}. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only lowercase letters, digits, and the following special characters: . - ? = ~ _ - + \/ ^ * ! $ & | ( ) [ ].
            /// * path: the path to which requests are redirected. Default value: ${path}. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? ~ ^ * $ : ( ) [ ] + |. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: . - _ \/ = ? :. The path must start with a forward slash (\/).
            /// * query: the query string of the requests to be redirected. Default value: ${query}. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are greater than or equal to 32 and smaller than 127. The query string cannot contain uppercase letters, space characters, or the following special characters: [ ] { } < > # | &.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleActionValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleActionValue
            {
                get => _ruleActionValue;
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
                    _ruleActionValue = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IRuleConditionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosForwardingRules.RuleConditionsProperty")]
        public interface IRuleConditionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ruleConditionType: The type of the forwarding conditions. Valid values:
            /// * Host: domain name
            /// * Path: path
            /// * RequestHeader: HTTP header
            /// * Query: query string
            /// * Method: HTTP method
            /// * Cookie: cookie
            /// * SourceIP: source IP address
            /// </remarks>
            [JsiiProperty(name: "ruleConditionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RuleConditionType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleConditionValue: The endpoint port that is mapped to the listener port.
            /// </remarks>
            [JsiiProperty(name: "ruleConditionValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RuleConditionValue
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRuleConditionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosForwardingRules.RuleConditionsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IRuleConditionsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: ruleConditionType: The type of the forwarding conditions. Valid values:
                /// * Host: domain name
                /// * Path: path
                /// * RequestHeader: HTTP header
                /// * Query: query string
                /// * Method: HTTP method
                /// * Cookie: cookie
                /// * SourceIP: source IP address
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ruleConditionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RuleConditionType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ruleConditionValue: The endpoint port that is mapped to the listener port.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ruleConditionValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RuleConditionValue
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosForwardingRules.RuleConditionsProperty")]
        public class RuleConditionsProperty : AlibabaCloud.SDK.ROS.CDK.Ga.RosForwardingRules.IRuleConditionsProperty
        {
            private object? _ruleConditionType;

            /// <remarks>
            /// <strong>Property</strong>: ruleConditionType: The type of the forwarding conditions. Valid values:
            /// * Host: domain name
            /// * Path: path
            /// * RequestHeader: HTTP header
            /// * Query: query string
            /// * Method: HTTP method
            /// * Cookie: cookie
            /// * SourceIP: source IP address
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleConditionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleConditionType
            {
                get => _ruleConditionType;
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
                    _ruleConditionType = value;
                }
            }

            private object? _ruleConditionValue;

            /// <remarks>
            /// <strong>Property</strong>: ruleConditionValue: The endpoint port that is mapped to the listener port.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleConditionValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleConditionValue
            {
                get => _ruleConditionValue;
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
                    _ruleConditionValue = value;
                }
            }
        }
    }
}
