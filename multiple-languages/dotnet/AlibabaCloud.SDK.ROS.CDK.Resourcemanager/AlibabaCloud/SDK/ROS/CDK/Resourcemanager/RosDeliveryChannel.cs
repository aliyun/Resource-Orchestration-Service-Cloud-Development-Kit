using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::DeliveryChannel`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `DeliveryChannel` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannelProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosDeliveryChannel : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosDeliveryChannel(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosDeliveryChannelProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosDeliveryChannelProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDeliveryChannel(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDeliveryChannel(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel))!;

        /// <remarks>
        /// <strong>Attribute</strong>: DeliveryChannelDescription: The description of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "attrDeliveryChannelDescription", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDeliveryChannelDescription
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DeliveryChannelFilter: The effective scope of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "attrDeliveryChannelFilter", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDeliveryChannelFilter
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DeliveryChannelId: The ID of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "attrDeliveryChannelId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDeliveryChannelId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DeliveryChannelName: The name of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "attrDeliveryChannelName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDeliveryChannelName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ResourceChangeDelivery: The delivery of resource configuration changes.
        /// </remarks>
        [JsiiProperty(name: "attrResourceChangeDelivery", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrResourceChangeDelivery
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.
        /// </remarks>
        [JsiiProperty(name: "attrResourceSnapshotDelivery", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrResourceSnapshotDelivery
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelFilter: The effective scope of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty\"}]}}")]
        public virtual object DeliveryChannelFilter
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
                        case AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IDeliveryChannelFilterProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IDeliveryChannelFilterProperty).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IDeliveryChannelFilterProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelName: The name of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object DeliveryChannelName
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
        /// <strong>Property</strong>: deliveryChannelDescription: The description of the delivery channel.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeliveryChannelDescription
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
        /// <strong>Property</strong>: deliveryChannelId: The ID of the delivery channel.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeliveryChannelId
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
        /// <strong>Property</strong>: enabledResourceChangeDelivery: Enable resource change delivery.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enabledResourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EnabledResourceChangeDelivery
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
        /// <strong>Property</strong>: enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enabledResourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EnabledResourceSnapshotDelivery
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
        /// <strong>Property</strong>: resourceChangeDelivery: The delivery of resource configuration changes.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty\"}]}}", isOptional: true)]
        public virtual object? ResourceChangeDelivery
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
                        case AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceChangeDeliveryProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceChangeDeliveryProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty\"}]}}", isOptional: true)]
        public virtual object? ResourceSnapshotDelivery
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
                        case AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceSnapshotDeliveryProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceSnapshotDeliveryProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }
        [JsiiInterface(nativeType: typeof(IDeliveryChannelFilterProperty), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty")]
        public interface IDeliveryChannelFilterProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: accountScopes: The accounts within the delivery scope.
            /// </remarks>
            [JsiiProperty(name: "accountScopes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AccountScopes
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceTypes: The list of resource types to be delivered.
            /// </remarks>
            [JsiiProperty(name: "resourceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ResourceTypes
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDeliveryChannelFilterProperty), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IDeliveryChannelFilterProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: accountScopes: The accounts within the delivery scope.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "accountScopes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? AccountScopes
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: resourceTypes: The list of resource types to be delivered.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "resourceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ResourceTypes
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty")]
        public class DeliveryChannelFilterProperty : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IDeliveryChannelFilterProperty
        {
            private object? _accountScopes;

            /// <remarks>
            /// <strong>Property</strong>: accountScopes: The accounts within the delivery scope.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountScopes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AccountScopes
            {
                get => _accountScopes;
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
                                        case string cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _accountScopes = value;
                }
            }

            private object? _resourceTypes;

            /// <remarks>
            /// <strong>Property</strong>: resourceTypes: The list of resource types to be delivered.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceTypes
            {
                get => _resourceTypes;
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
                                        case string cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _resourceTypes = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IResourceChangeDeliveryProperty), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty")]
        public interface IResourceChangeDeliveryProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: slsProperties: The SLS configurations.
            /// </remarks>
            [JsiiProperty(name: "slsProperties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.SlsPropertiesProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlsProperties
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: targetArn: The ARN of the destination. Valid values:
            /// * If you set TargetType to OSS, set TargetArn to the ARN of an OSS bucket that has the resourcecenter- prefix.
            /// * If you set TargetType to SLS, set TargetArn to the ARN of an SLS Logstore that has the resourcecenter- prefix.
            /// </remarks>
            [JsiiProperty(name: "targetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TargetArn
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IResourceChangeDeliveryProperty), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceChangeDeliveryProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: slsProperties: The SLS configurations.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slsProperties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.SlsPropertiesProperty\"}]}}", isOptional: true)]
                public object? SlsProperties
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: targetArn: The ARN of the destination. Valid values:
                /// * If you set TargetType to OSS, set TargetArn to the ARN of an OSS bucket that has the resourcecenter- prefix.
                /// * If you set TargetType to SLS, set TargetArn to the ARN of an SLS Logstore that has the resourcecenter- prefix.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "targetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TargetArn
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty")]
        public class ResourceChangeDeliveryProperty : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceChangeDeliveryProperty
        {
            private object? _slsProperties;

            /// <remarks>
            /// <strong>Property</strong>: slsProperties: The SLS configurations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsProperties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.SlsPropertiesProperty\"}]}}", isOptional: true)]
            public object? SlsProperties
            {
                get => _slsProperties;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.ISlsPropertiesProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.ISlsPropertiesProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _slsProperties = value;
                }
            }

            private object? _targetArn;

            /// <remarks>
            /// <strong>Property</strong>: targetArn: The ARN of the destination. Valid values:
            /// * If you set TargetType to OSS, set TargetArn to the ARN of an OSS bucket that has the resourcecenter- prefix.
            /// * If you set TargetType to SLS, set TargetArn to the ARN of an SLS Logstore that has the resourcecenter- prefix.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetArn
            {
                get => _targetArn;
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
                    _targetArn = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IResourceSnapshotDeliveryProperty), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty")]
        public interface IResourceSnapshotDeliveryProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: customExpression: The custom expression.
            /// </remarks>
            [JsiiProperty(name: "customExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CustomExpression
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: deliveryTime: The delivery time.
            /// </remarks>
            [JsiiProperty(name: "deliveryTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DeliveryTime
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: slsProperties: The SLS configurations.
            /// </remarks>
            [JsiiProperty(name: "slsProperties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlsProperties
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: targetArn: The ARN of the destination.
            /// </remarks>
            [JsiiProperty(name: "targetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TargetArn
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IResourceSnapshotDeliveryProperty), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceSnapshotDeliveryProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: customExpression: The custom expression.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "customExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CustomExpression
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: deliveryTime: The delivery time.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "deliveryTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DeliveryTime
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: slsProperties: The SLS configurations.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slsProperties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty\"}]}}", isOptional: true)]
                public object? SlsProperties
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: targetArn: The ARN of the destination.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "targetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TargetArn
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty")]
        public class ResourceSnapshotDeliveryProperty : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceSnapshotDeliveryProperty
        {
            private object? _customExpression;

            /// <remarks>
            /// <strong>Property</strong>: customExpression: The custom expression.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomExpression
            {
                get => _customExpression;
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
                    _customExpression = value;
                }
            }

            private object? _deliveryTime;

            /// <remarks>
            /// <strong>Property</strong>: deliveryTime: The delivery time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deliveryTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliveryTime
            {
                get => _deliveryTime;
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
                    _deliveryTime = value;
                }
            }

            private object? _slsProperties;

            /// <remarks>
            /// <strong>Property</strong>: slsProperties: The SLS configurations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsProperties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty\"}]}}", isOptional: true)]
            public object? SlsProperties
            {
                get => _slsProperties;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceSnapshotDeliverySlsPropertiesProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceSnapshotDeliverySlsPropertiesProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _slsProperties = value;
                }
            }

            private object? _targetArn;

            /// <remarks>
            /// <strong>Property</strong>: targetArn: The ARN of the destination.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetArn
            {
                get => _targetArn;
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
                    _targetArn = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IResourceSnapshotDeliverySlsPropertiesProperty), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty")]
        public interface IResourceSnapshotDeliverySlsPropertiesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
            /// </remarks>
            [JsiiProperty(name: "oversizedDataOssTargetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OversizedDataOssTargetArn
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IResourceSnapshotDeliverySlsPropertiesProperty), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceSnapshotDeliverySlsPropertiesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "oversizedDataOssTargetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OversizedDataOssTargetArn
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty")]
        public class ResourceSnapshotDeliverySlsPropertiesProperty : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.IResourceSnapshotDeliverySlsPropertiesProperty
        {
            private object? _oversizedDataOssTargetArn;

            /// <remarks>
            /// <strong>Property</strong>: oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oversizedDataOssTargetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OversizedDataOssTargetArn
            {
                get => _oversizedDataOssTargetArn;
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
                    _oversizedDataOssTargetArn = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ISlsPropertiesProperty), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.SlsPropertiesProperty")]
        public interface ISlsPropertiesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
            /// </remarks>
            [JsiiProperty(name: "oversizedDataOssTargetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OversizedDataOssTargetArn
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISlsPropertiesProperty), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.SlsPropertiesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.ISlsPropertiesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "oversizedDataOssTargetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OversizedDataOssTargetArn
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.SlsPropertiesProperty")]
        public class SlsPropertiesProperty : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosDeliveryChannel.ISlsPropertiesProperty
        {
            private object? _oversizedDataOssTargetArn;

            /// <remarks>
            /// <strong>Property</strong>: oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oversizedDataOssTargetArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OversizedDataOssTargetArn
            {
                get => _oversizedDataOssTargetArn;
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
                    _oversizedDataOssTargetArn = value;
                }
            }
        }
    }
}
