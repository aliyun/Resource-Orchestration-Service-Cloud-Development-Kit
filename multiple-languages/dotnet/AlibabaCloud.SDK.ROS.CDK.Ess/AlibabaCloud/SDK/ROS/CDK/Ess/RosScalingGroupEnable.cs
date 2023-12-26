using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::ScalingGroupEnable`, which is used to enable a scaling group.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `ScalingGroupEnable` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroupenable
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingGroupEnable", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroupEnableProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosScalingGroupEnable : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosScalingGroupEnable(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ess.IRosScalingGroupEnableProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ess.IRosScalingGroupEnableProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosScalingGroupEnable(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosScalingGroupEnable(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable))!;

        /// <remarks>
        /// <strong>Attribute</strong>: LifecycleState: The scaling group status
        /// </remarks>
        [JsiiProperty(name: "attrLifecycleState", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLifecycleState
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingGroupId: The scaling group id
        /// </remarks>
        [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScalingGroupId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingInstanceDetails: Detail information of auto created scaling instances
        /// </remarks>
        [JsiiProperty(name: "attrScalingInstanceDetails", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScalingInstanceDetails
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingInstances: The auto created scaling instances
        /// </remarks>
        [JsiiProperty(name: "attrScalingInstances", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScalingInstances
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris
        /// </remarks>
        [JsiiProperty(name: "attrScalingRuleArisExecuteErrorInfo", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScalingRuleArisExecuteErrorInfo
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris
        /// </remarks>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultInstancesAdded", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScalingRuleArisExecuteResultInstancesAdded
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris
        /// </remarks>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultInstancesRemoved", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScalingRuleArisExecuteResultInstancesRemoved
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris
        /// </remarks>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultNumberOfAddedInstances", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScalingRuleArisExecuteResultNumberOfAddedInstances
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
        /// <strong>Property</strong>: scalingGroupId: The id of operated scaling group.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ScalingGroupId
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
        /// <strong>Property</strong>: attachOptions: Options for attaching instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "attachOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroupEnable.AttachOptionsProperty\"}]}}", isOptional: true)]
        public virtual object? AttachOptions
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
                        case AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable.IAttachOptionsProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable.IAttachOptionsProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: detachOptions: Options for detaching instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "detachOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroupEnable.DetachOptionsProperty\"}]}}", isOptional: true)]
        public virtual object? DetachOptions
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
                        case AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable.IDetachOptionsProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable.IDetachOptionsProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InstanceIds
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case object[] cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "removeInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RemoveInstanceIds
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case object[] cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingConfigurationId: The id of scaling configuration which will be activate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ScalingConfigurationId
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
        /// <strong>Property</strong>: scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
        /// When creating the resource, all the scaling rule aris in the list will be executed.
        /// When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleAris", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ScalingRuleAris
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case object[] cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleArisExecuteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ScalingRuleArisExecuteVersion
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
        [JsiiInterface(nativeType: typeof(IAttachOptionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingGroupEnable.AttachOptionsProperty")]
        public interface IAttachOptionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: entrusted: Specifies whether the scaling group manages the lifecycle of instances that are manually added to the scaling group. Valid values:
            /// - true: The scaling group manages the lifecycle of instances that are manually added in a similar manner in which the scaling group manages the lifecycle of automatically created instances. When the instances are removed from the scaling group, the instances are automatically released. However, if you call the DetachInstances operation to remove the instances from the scaling group, the instances are not released.
            /// - false: The scaling group does not manage the lifecycle of instances that are manually added. After the instances are removed from the scaling group, the instances are not released.
            /// Default value: false.
            /// Note: This property is unavailable for subscription instances.
            /// </remarks>
            [JsiiProperty(name: "entrusted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Entrusted
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: lifecycleHook: Specifies whether to trigger a lifecycle hook for the scaling group to which instances are being added. Valid values:
            /// - true
            /// - false
            /// Default value: false.
            /// </remarks>
            [JsiiProperty(name: "lifecycleHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? LifecycleHook
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IAttachOptionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingGroupEnable.AttachOptionsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable.IAttachOptionsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: entrusted: Specifies whether the scaling group manages the lifecycle of instances that are manually added to the scaling group. Valid values:
                /// - true: The scaling group manages the lifecycle of instances that are manually added in a similar manner in which the scaling group manages the lifecycle of automatically created instances. When the instances are removed from the scaling group, the instances are automatically released. However, if you call the DetachInstances operation to remove the instances from the scaling group, the instances are not released.
                /// - false: The scaling group does not manage the lifecycle of instances that are manually added. After the instances are removed from the scaling group, the instances are not released.
                /// Default value: false.
                /// Note: This property is unavailable for subscription instances.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "entrusted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Entrusted
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: lifecycleHook: Specifies whether to trigger a lifecycle hook for the scaling group to which instances are being added. Valid values:
                /// - true
                /// - false
                /// Default value: false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "lifecycleHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? LifecycleHook
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.RosScalingGroupEnable.AttachOptionsProperty")]
        public class AttachOptionsProperty : AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable.IAttachOptionsProperty
        {
            private object? _entrusted;

            /// <remarks>
            /// <strong>Property</strong>: entrusted: Specifies whether the scaling group manages the lifecycle of instances that are manually added to the scaling group. Valid values:
            /// - true: The scaling group manages the lifecycle of instances that are manually added in a similar manner in which the scaling group manages the lifecycle of automatically created instances. When the instances are removed from the scaling group, the instances are automatically released. However, if you call the DetachInstances operation to remove the instances from the scaling group, the instances are not released.
            /// - false: The scaling group does not manage the lifecycle of instances that are manually added. After the instances are removed from the scaling group, the instances are not released.
            /// Default value: false.
            /// Note: This property is unavailable for subscription instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "entrusted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Entrusted
            {
                get => _entrusted;
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
                    _entrusted = value;
                }
            }

            private object? _lifecycleHook;

            /// <remarks>
            /// <strong>Property</strong>: lifecycleHook: Specifies whether to trigger a lifecycle hook for the scaling group to which instances are being added. Valid values:
            /// - true
            /// - false
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lifecycleHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LifecycleHook
            {
                get => _lifecycleHook;
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
                    _lifecycleHook = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IDetachOptionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingGroupEnable.DetachOptionsProperty")]
        public interface IDetachOptionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: decreaseDesiredCapacity: Specifies whether to adjust the expected number of instances in the scaling group. Valid values:
            /// - true: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group decreases.
            /// - false: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group remains unchanged.
            /// Default value: true.
            /// </remarks>
            [JsiiProperty(name: "decreaseDesiredCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DecreaseDesiredCapacity
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: detachOption: Specifies whether to remove the instances from the default server groups and vServer groups of the Server Load Balancer (SLB) instance that is associated with the scaling group, and whether to remove the IP addresses of the instances from the whitelist that manages access to the ApsaraDB RDS instance that is associated with the scaling group.
            /// If you set this parameter to both, the instances are removed from the default sever groups and vServer groups of the associated SLB instance, and the IP addresses of the instances are removed from the whitelist that manages access to the associated ApsaraDB RDS instance.
            /// </remarks>
            [JsiiProperty(name: "detachOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DetachOption
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: lifecycleHook: Specifies whether to trigger the lifecycle hook for the scaling group when you remove instances from the scaling group. Valid values:
            /// - true
            /// - false
            /// Default value: false.
            /// </remarks>
            [JsiiProperty(name: "lifecycleHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? LifecycleHook
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDetachOptionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingGroupEnable.DetachOptionsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable.IDetachOptionsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: decreaseDesiredCapacity: Specifies whether to adjust the expected number of instances in the scaling group. Valid values:
                /// - true: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group decreases.
                /// - false: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group remains unchanged.
                /// Default value: true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "decreaseDesiredCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DecreaseDesiredCapacity
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: detachOption: Specifies whether to remove the instances from the default server groups and vServer groups of the Server Load Balancer (SLB) instance that is associated with the scaling group, and whether to remove the IP addresses of the instances from the whitelist that manages access to the ApsaraDB RDS instance that is associated with the scaling group.
                /// If you set this parameter to both, the instances are removed from the default sever groups and vServer groups of the associated SLB instance, and the IP addresses of the instances are removed from the whitelist that manages access to the associated ApsaraDB RDS instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "detachOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DetachOption
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: lifecycleHook: Specifies whether to trigger the lifecycle hook for the scaling group when you remove instances from the scaling group. Valid values:
                /// - true
                /// - false
                /// Default value: false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "lifecycleHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? LifecycleHook
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.RosScalingGroupEnable.DetachOptionsProperty")]
        public class DetachOptionsProperty : AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable.IDetachOptionsProperty
        {
            private object? _decreaseDesiredCapacity;

            /// <remarks>
            /// <strong>Property</strong>: decreaseDesiredCapacity: Specifies whether to adjust the expected number of instances in the scaling group. Valid values:
            /// - true: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group decreases.
            /// - false: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group remains unchanged.
            /// Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "decreaseDesiredCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DecreaseDesiredCapacity
            {
                get => _decreaseDesiredCapacity;
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
                    _decreaseDesiredCapacity = value;
                }
            }

            private object? _detachOption;

            /// <remarks>
            /// <strong>Property</strong>: detachOption: Specifies whether to remove the instances from the default server groups and vServer groups of the Server Load Balancer (SLB) instance that is associated with the scaling group, and whether to remove the IP addresses of the instances from the whitelist that manages access to the ApsaraDB RDS instance that is associated with the scaling group.
            /// If you set this parameter to both, the instances are removed from the default sever groups and vServer groups of the associated SLB instance, and the IP addresses of the instances are removed from the whitelist that manages access to the associated ApsaraDB RDS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "detachOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DetachOption
            {
                get => _detachOption;
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
                    _detachOption = value;
                }
            }

            private object? _lifecycleHook;

            /// <remarks>
            /// <strong>Property</strong>: lifecycleHook: Specifies whether to trigger the lifecycle hook for the scaling group when you remove instances from the scaling group. Valid values:
            /// - true
            /// - false
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lifecycleHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LifecycleHook
            {
                get => _lifecycleHook;
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
                    _lifecycleHook = value;
                }
            }
        }
    }
}
