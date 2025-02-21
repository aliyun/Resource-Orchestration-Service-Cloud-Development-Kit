using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::ALB::Listener`, which is used to create an HTTP, HTTPS, or Quick UDP Internet Connections (QUIC) listener.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `Listener` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-listener
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosListenerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosListener : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosListener(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Alb.IRosListenerProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Alb.IRosListenerProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosListener(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosListener(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ListenerId: The ID of the listener.
        /// </remarks>
        [JsiiProperty(name: "attrListenerId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrListenerId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LoadBalancerId: The ID of the ALB instance.
        /// </remarks>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLoadBalancerId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultActions: The actions of the rule.
        /// </remarks>
        [JsiiProperty(name: "defaultActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object DefaultActions
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
                                    case AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IDefaultActionsProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IDefaultActionsProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IDefaultActionsProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerPort: The frontend port that is used by the ALB instance.
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ListenerPort
        {
            get => GetInstanceProperty<object>()!;
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
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerProtocol: The listener protocol.
        /// Valid values: HTTP, HTTPS, and QUIC.
        /// </remarks>
        [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ListenerProtocol
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
        /// <strong>Property</strong>: loadBalancerId: The ID of the ALB instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object LoadBalancerId
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
        /// <strong>Property</strong>: caCertificates: List of configured CA certificates for listener.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "caCertificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.CaCertificatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? CaCertificates
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
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICaCertificatesProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICaCertificatesProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICaCertificatesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: caEnabled: Specifies whether to enable mutual authentication. Default false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "caEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? CaEnabled
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
        /// <strong>Property</strong>: certificates: The list of SSL certificates for listener.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.CertificatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Certificates
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
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICertificatesProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICertificatesProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICertificatesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
        /// Valid values: true and false.
        /// Default value: true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "gzipEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? GzipEnabled
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
        /// <strong>Property</strong>: http2Enabled: Specifies whether to enable HTTP\/2. Default value: on.
        /// Valid values: true and false.
        /// Default value: true.
        /// Note: Only HTTPS listeners support this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "http2Enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Http2Enabled
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
        /// <strong>Property</strong>: idleTimeout: The timeout period of idle connections.
        /// Valid values: 1 to 3600. Unit: seconds.
        /// Default value: 15.
        /// If no requests are received within the specified timeout period, ALB closes the current connection. When a new request is received, ALB establishes a new connection.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "idleTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IdleTimeout
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
        /// <strong>Property</strong>: listenerDescription: The description of the listener.
        /// The description must be 2 to 256 characters in length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "listenerDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ListenerDescription
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
        /// <strong>Property</strong>: listenerStatus: The status of the listener.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "listenerStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ListenerStatus
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
        /// <strong>Property</strong>: logConfig: The configuration information about the access log.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.LogConfigProperty\"}]}}", isOptional: true)]
        public virtual object? LogConfig
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
                        case AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ILogConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ILogConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: quicConfig: Select a QUIC listener and associate it with the ALB instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "quicConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty\"}]}}", isOptional: true)]
        public virtual object? QuicConfig
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
                        case AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IQuicConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IQuicConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: requestTimeout: The timeout period of the request.
        /// Valid values: 1 to 900. Unit: seconds.
        /// Default value: 60.
        /// If no response is received from the backend server during the request timeout period,
        /// ALB sends an HTTP 504 error code to the client.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RequestTimeout
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
        /// <strong>Property</strong>: securityPolicyId: The ID of the security policy. System security policies and custom security policies
        /// are supported.
        /// Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
        /// Note: Only HTTPS listeners support this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SecurityPolicyId
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
        /// <strong>Property</strong>: xForwardedForConfig: The configuration of the XForward field.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "xForwardedForConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty\"}]}}", isOptional: true)]
        public virtual object? XForwardedForConfig
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
                        case AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IXForwardedForConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IXForwardedForConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }
        [JsiiInterface(nativeType: typeof(IAccessLogTracingConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.AccessLogTracingConfigProperty")]
        public interface IAccessLogTracingConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tracingEnabled: Specifies whether to enable the Xtrace feature. Valid values:
            /// true
            /// false (default)
            /// </remarks>
            [JsiiProperty(name: "tracingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TracingEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tracingSample: The sampling rate of the Xtrace feature. Valid values: 1 to 10000.
            /// </remarks>
            [JsiiProperty(name: "tracingSample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TracingSample
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tracingType: The type of Xtrace. Set the value to Zipkin.
            /// </remarks>
            [JsiiProperty(name: "tracingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TracingType
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IAccessLogTracingConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.AccessLogTracingConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IAccessLogTracingConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: tracingEnabled: Specifies whether to enable the Xtrace feature. Valid values:
                /// true
                /// false (default)
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tracingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TracingEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tracingSample: The sampling rate of the Xtrace feature. Valid values: 1 to 10000.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tracingSample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TracingSample
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tracingType: The type of Xtrace. Set the value to Zipkin.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tracingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TracingType
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.AccessLogTracingConfigProperty")]
        public class AccessLogTracingConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IAccessLogTracingConfigProperty
        {
            private object? _tracingEnabled;

            /// <remarks>
            /// <strong>Property</strong>: tracingEnabled: Specifies whether to enable the Xtrace feature. Valid values:
            /// true
            /// false (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tracingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TracingEnabled
            {
                get => _tracingEnabled;
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
                    _tracingEnabled = value;
                }
            }

            private object? _tracingSample;

            /// <remarks>
            /// <strong>Property</strong>: tracingSample: The sampling rate of the Xtrace feature. Valid values: 1 to 10000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tracingSample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TracingSample
            {
                get => _tracingSample;
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
                    _tracingSample = value;
                }
            }

            private object? _tracingType;

            /// <remarks>
            /// <strong>Property</strong>: tracingType: The type of Xtrace. Set the value to Zipkin.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tracingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TracingType
            {
                get => _tracingType;
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
                    _tracingType = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ICaCertificatesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.CaCertificatesProperty")]
        public interface ICaCertificatesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: certificateId: The CA certificate ID.
            /// </remarks>
            [JsiiProperty(name: "certificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CertificateId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ICaCertificatesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.CaCertificatesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICaCertificatesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: certificateId: The CA certificate ID.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "certificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CertificateId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.CaCertificatesProperty")]
        public class CaCertificatesProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICaCertificatesProperty
        {
            private object? _certificateId;

            /// <remarks>
            /// <strong>Property</strong>: certificateId: The CA certificate ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertificateId
            {
                get => _certificateId;
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
                    _certificateId = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ICertificatesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.CertificatesProperty")]
        public interface ICertificatesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: certificateId: The certificate ID.
            /// </remarks>
            [JsiiProperty(name: "certificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CertificateId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ICertificatesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.CertificatesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICertificatesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: certificateId: The certificate ID.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "certificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CertificateId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.CertificatesProperty")]
        public class CertificatesProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICertificatesProperty
        {
            private object? _certificateId;

            /// <remarks>
            /// <strong>Property</strong>: certificateId: The certificate ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertificateId
            {
                get => _certificateId;
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
                    _certificateId = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IDefaultActionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty")]
        public interface IDefaultActionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: forwardGroupConfig: The configurations of the actions. This parameter is required if Type is set to FowardGroup.
            /// </remarks>
            [JsiiProperty(name: "forwardGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty\"}]}}")]
            object ForwardGroupConfig
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The action type. The value is set to ForwardGroup.
            /// It indicates that requests are forwarded to multiple vServer groups.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Type
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IDefaultActionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IDefaultActionsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: forwardGroupConfig: The configurations of the actions. This parameter is required if Type is set to FowardGroup.
                /// </remarks>
                [JsiiProperty(name: "forwardGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty\"}]}}")]
                public object ForwardGroupConfig
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The action type. The value is set to ForwardGroup.
                /// It indicates that requests are forwarded to multiple vServer groups.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Type
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty")]
        public class DefaultActionsProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IDefaultActionsProperty
        {
            private object _forwardGroupConfig;

            /// <remarks>
            /// <strong>Property</strong>: forwardGroupConfig: The configurations of the actions. This parameter is required if Type is set to FowardGroup.
            /// </remarks>
            [JsiiProperty(name: "forwardGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty\"}]}}")]
            public object ForwardGroupConfig
            {
                get => _forwardGroupConfig;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IForwardGroupConfigProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IForwardGroupConfigProperty).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IForwardGroupConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _forwardGroupConfig = value;
                }
            }

            private object _type;

            /// <remarks>
            /// <strong>Property</strong>: type: The action type. The value is set to ForwardGroup.
            /// It indicates that requests are forwarded to multiple vServer groups.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => _type;
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
                    _type = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IForwardGroupConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty")]
        public interface IForwardGroupConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverGroupTuples: The destination server group to which requests are forwarded.
            /// </remarks>
            [JsiiProperty(name: "serverGroupTuples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object ServerGroupTuples
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IForwardGroupConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IForwardGroupConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: serverGroupTuples: The destination server group to which requests are forwarded.
                /// </remarks>
                [JsiiProperty(name: "serverGroupTuples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object ServerGroupTuples
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty")]
        public class ForwardGroupConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IForwardGroupConfigProperty
        {
            private object _serverGroupTuples;

            /// <remarks>
            /// <strong>Property</strong>: serverGroupTuples: The destination server group to which requests are forwarded.
            /// </remarks>
            [JsiiProperty(name: "serverGroupTuples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ServerGroupTuples
            {
                get => _serverGroupTuples;
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
                                        case AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IServerGroupTuplesProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IServerGroupTuplesProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IServerGroupTuplesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
                    _serverGroupTuples = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ILogConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.LogConfigProperty")]
        public interface ILogConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: accessLogRecordCustomizedHeadersEnabled: Specifies whether to record custom headers in the access log.
            /// Valid values:
            /// true
            /// false (default)
            /// </remarks>
            [JsiiProperty(name: "accessLogRecordCustomizedHeadersEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AccessLogRecordCustomizedHeadersEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: accessLogTracingConfig: The configuration information about the Xtrace feature.
            /// </remarks>
            [JsiiProperty(name: "accessLogTracingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.AccessLogTracingConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AccessLogTracingConfig
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ILogConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.LogConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ILogConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: accessLogRecordCustomizedHeadersEnabled: Specifies whether to record custom headers in the access log.
                /// Valid values:
                /// true
                /// false (default)
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "accessLogRecordCustomizedHeadersEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AccessLogRecordCustomizedHeadersEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: accessLogTracingConfig: The configuration information about the Xtrace feature.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "accessLogTracingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.AccessLogTracingConfigProperty\"}]}}", isOptional: true)]
                public object? AccessLogTracingConfig
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.LogConfigProperty")]
        public class LogConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ILogConfigProperty
        {
            private object? _accessLogRecordCustomizedHeadersEnabled;

            /// <remarks>
            /// <strong>Property</strong>: accessLogRecordCustomizedHeadersEnabled: Specifies whether to record custom headers in the access log.
            /// Valid values:
            /// true
            /// false (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogRecordCustomizedHeadersEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessLogRecordCustomizedHeadersEnabled
            {
                get => _accessLogRecordCustomizedHeadersEnabled;
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
                    _accessLogRecordCustomizedHeadersEnabled = value;
                }
            }

            private object? _accessLogTracingConfig;

            /// <remarks>
            /// <strong>Property</strong>: accessLogTracingConfig: The configuration information about the Xtrace feature.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessLogTracingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.AccessLogTracingConfigProperty\"}]}}", isOptional: true)]
            public object? AccessLogTracingConfig
            {
                get => _accessLogTracingConfig;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IAccessLogTracingConfigProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IAccessLogTracingConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _accessLogTracingConfig = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IQuicConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty")]
        public interface IQuicConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: quicListenerId: The ID of the QUIC listener to be associated. Only HTTPS listeners support this parameter. If QuicUpgradeEnabled is set to true, this parameter is required.
            /// Note The original listener and the QUIC listener must belong to the same ALB instance.
            /// In addition, make sure that the QUIC listener has not been associated before.
            /// </remarks>
            [JsiiProperty(name: "quicListenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? QuicListenerId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: quicUpgradeEnabled: Specifies whether to enable the QUIC update feature.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "quicUpgradeEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? QuicUpgradeEnabled
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IQuicConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IQuicConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: quicListenerId: The ID of the QUIC listener to be associated. Only HTTPS listeners support this parameter. If QuicUpgradeEnabled is set to true, this parameter is required.
                /// Note The original listener and the QUIC listener must belong to the same ALB instance.
                /// In addition, make sure that the QUIC listener has not been associated before.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "quicListenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? QuicListenerId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: quicUpgradeEnabled: Specifies whether to enable the QUIC update feature.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note: Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "quicUpgradeEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? QuicUpgradeEnabled
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty")]
        public class QuicConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IQuicConfigProperty
        {
            private object? _quicListenerId;

            /// <remarks>
            /// <strong>Property</strong>: quicListenerId: The ID of the QUIC listener to be associated. Only HTTPS listeners support this parameter. If QuicUpgradeEnabled is set to true, this parameter is required.
            /// Note The original listener and the QUIC listener must belong to the same ALB instance.
            /// In addition, make sure that the QUIC listener has not been associated before.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "quicListenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QuicListenerId
            {
                get => _quicListenerId;
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
                    _quicListenerId = value;
                }
            }

            private object? _quicUpgradeEnabled;

            /// <remarks>
            /// <strong>Property</strong>: quicUpgradeEnabled: Specifies whether to enable the QUIC update feature.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "quicUpgradeEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QuicUpgradeEnabled
            {
                get => _quicUpgradeEnabled;
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
                    _quicUpgradeEnabled = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IServerGroupTuplesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty")]
        public interface IServerGroupTuplesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverGroupId: The ID of the destination server group to which requests are forwarded.
            /// </remarks>
            [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ServerGroupId
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IServerGroupTuplesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IServerGroupTuplesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: serverGroupId: The ID of the destination server group to which requests are forwarded.
                /// </remarks>
                [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ServerGroupId
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty")]
        public class ServerGroupTuplesProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IServerGroupTuplesProperty
        {
            private object _serverGroupId;

            /// <remarks>
            /// <strong>Property</strong>: serverGroupId: The ID of the destination server group to which requests are forwarded.
            /// </remarks>
            [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerGroupId
            {
                get => _serverGroupId;
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
                    _serverGroupId = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IXForwardedForConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty")]
        public interface IXForwardedForConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertClientVerifyAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertClientVerifyEnabled is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertClientVerifyAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertClientVerifyAlias
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertClientVerifyEnabled: Specifies whether to use the X-Forwarded-Clientcert-clientverify header field to obtain the verification result of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertClientVerifyEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertClientVerifyEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertFingerprintAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertFingerprintEnabled is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertFingerprintAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertFingerprintAlias
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertFingerprintEnabled: Specifies whether to use the X-Forwarded-Clientcert-fingerprint header field to obtain the fingerprint of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertFingerprintEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertFingerprintEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertIssuerDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertIssuerDNEnabled is set to On.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertIssuerDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertIssuerDnAlias
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertIssuerDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-issuerdn header field to obtain information about the authority that issues the ALB client
            /// certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertIssuerDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertIssuerDnEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertSubjectDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertSubjectDNEnabled
            /// is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertSubjectDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertSubjectDnAlias
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertSubjectDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-subjectdn header field to obtain information about the owner of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertSubjectDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertSubjectDnEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientSourceIpsEnabled:
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientSourceIpsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientSourceIpsEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientSourceIpsTrusted:
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientSourceIpsTrusted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientSourceIpsTrusted
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientSrcPortEnabled: Specifies whether to use the X-Forwarded-Client-Port header field to obtain the port of the ALB client.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientSrcPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientSrcPortEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForEnabled: Specifies whether to use the X-Forwarded-For header field to obtain the real IP address of the client.
            /// Valid values: true and false.
            /// Default value: true.
            /// Note HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForHostEnabled: Whether to enable obtaining the domain name of the client accessing the load balancer instance through the X-Forwarded-Host header field. Values:
            /// true: Yes.
            /// false (default): No.
            /// Note: HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForHostEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForHostEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForProcessingMode: The mode for handling the X-Forwarded-For header field. This value takes effect only when XForwardedForEnabled is true. Possible values:
            /// append (default): Append.
            /// remove: Remove.
            /// Note: When configured as append, the last hop IP is added to the X-Forwarded-For header field before the request is sent to the backend service.
            /// When configured as remove, the X-Forwarded-For header is deleted before the request is sent to the backend service, regardless of whether the request carries the X-Forwarded-For header field.This parameter is supported by both HTTP and HTTPS listeners.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForProcessingMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForProcessingMode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForProtoEnabled: Specifies whether to use the X-Forwarded-Proto header field to obtain the listener protocol of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForProtoEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForProtoEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbIdEnabled: Specifies whether to use the SLB-ID header field to obtain the ID of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForSlbIdEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForSlbIdEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbPortEnabled: Specifies whether to use the X-Forwarded-Port header field to obtain the listener port of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForSlbPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForSlbPortEnabled
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IXForwardedForConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IXForwardedForConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertClientVerifyAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertClientVerifyEnabled is set to true.
                /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
                /// underscores (_), and digits.
                /// Note: Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertClientVerifyAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertClientVerifyAlias
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertClientVerifyEnabled: Specifies whether to use the X-Forwarded-Clientcert-clientverify header field to obtain the verification result of the ALB client certificate.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note: Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertClientVerifyEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertClientVerifyEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertFingerprintAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertFingerprintEnabled is set to true.
                /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
                /// underscores (_), and digits.
                /// Note: Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertFingerprintAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertFingerprintAlias
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertFingerprintEnabled: Specifies whether to use the X-Forwarded-Clientcert-fingerprint header field to obtain the fingerprint of the ALB client certificate.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note: Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertFingerprintEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertFingerprintEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertIssuerDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertIssuerDNEnabled is set to On.
                /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
                /// underscores (_), and digits.
                /// Note: Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertIssuerDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertIssuerDnAlias
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertIssuerDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-issuerdn header field to obtain information about the authority that issues the ALB client
                /// certificate.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note: Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertIssuerDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertIssuerDnEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertSubjectDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertSubjectDNEnabled
                /// is set to true.
                /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
                /// underscores (_), and digits.
                /// Note: Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertSubjectDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertSubjectDnAlias
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertSubjectDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-subjectdn header field to obtain information about the owner of the ALB client certificate.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note: Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertSubjectDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertSubjectDnEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientSourceIpsEnabled:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientSourceIpsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientSourceIpsEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientSourceIpsTrusted:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientSourceIpsTrusted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientSourceIpsTrusted
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientSrcPortEnabled: Specifies whether to use the X-Forwarded-Client-Port header field to obtain the port of the ALB client.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note HTTP and HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientSrcPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientSrcPortEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForEnabled: Specifies whether to use the X-Forwarded-For header field to obtain the real IP address of the client.
                /// Valid values: true and false.
                /// Default value: true.
                /// Note HTTP and HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForHostEnabled: Whether to enable obtaining the domain name of the client accessing the load balancer instance through the X-Forwarded-Host header field. Values:
                /// true: Yes.
                /// false (default): No.
                /// Note: HTTP, HTTPS, and QUIC listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForHostEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForHostEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForProcessingMode: The mode for handling the X-Forwarded-For header field. This value takes effect only when XForwardedForEnabled is true. Possible values:
                /// append (default): Append.
                /// remove: Remove.
                /// Note: When configured as append, the last hop IP is added to the X-Forwarded-For header field before the request is sent to the backend service.
                /// When configured as remove, the X-Forwarded-For header is deleted before the request is sent to the backend service, regardless of whether the request carries the X-Forwarded-For header field.This parameter is supported by both HTTP and HTTPS listeners.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForProcessingMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForProcessingMode
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForProtoEnabled: Specifies whether to use the X-Forwarded-Proto header field to obtain the listener protocol of the ALB instance.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note: HTTP, HTTPS, and QUIC listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForProtoEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForProtoEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForSlbIdEnabled: Specifies whether to use the SLB-ID header field to obtain the ID of the ALB instance.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForSlbIdEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForSlbIdEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForSlbPortEnabled: Specifies whether to use the X-Forwarded-Port header field to obtain the listener port of the ALB instance.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForSlbPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForSlbPortEnabled
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty")]
        public class XForwardedForConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IXForwardedForConfigProperty
        {
            private object? _xForwardedForClientCertClientVerifyAlias;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertClientVerifyAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertClientVerifyEnabled is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertClientVerifyAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertClientVerifyAlias
            {
                get => _xForwardedForClientCertClientVerifyAlias;
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
                    _xForwardedForClientCertClientVerifyAlias = value;
                }
            }

            private object? _xForwardedForClientCertClientVerifyEnabled;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertClientVerifyEnabled: Specifies whether to use the X-Forwarded-Clientcert-clientverify header field to obtain the verification result of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertClientVerifyEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertClientVerifyEnabled
            {
                get => _xForwardedForClientCertClientVerifyEnabled;
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
                    _xForwardedForClientCertClientVerifyEnabled = value;
                }
            }

            private object? _xForwardedForClientCertFingerprintAlias;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertFingerprintAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertFingerprintEnabled is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertFingerprintAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertFingerprintAlias
            {
                get => _xForwardedForClientCertFingerprintAlias;
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
                    _xForwardedForClientCertFingerprintAlias = value;
                }
            }

            private object? _xForwardedForClientCertFingerprintEnabled;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertFingerprintEnabled: Specifies whether to use the X-Forwarded-Clientcert-fingerprint header field to obtain the fingerprint of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertFingerprintEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertFingerprintEnabled
            {
                get => _xForwardedForClientCertFingerprintEnabled;
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
                    _xForwardedForClientCertFingerprintEnabled = value;
                }
            }

            private object? _xForwardedForClientCertIssuerDnAlias;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertIssuerDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertIssuerDNEnabled is set to On.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertIssuerDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertIssuerDnAlias
            {
                get => _xForwardedForClientCertIssuerDnAlias;
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
                    _xForwardedForClientCertIssuerDnAlias = value;
                }
            }

            private object? _xForwardedForClientCertIssuerDnEnabled;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertIssuerDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-issuerdn header field to obtain information about the authority that issues the ALB client
            /// certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertIssuerDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertIssuerDnEnabled
            {
                get => _xForwardedForClientCertIssuerDnEnabled;
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
                    _xForwardedForClientCertIssuerDnEnabled = value;
                }
            }

            private object? _xForwardedForClientCertSubjectDnAlias;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertSubjectDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertSubjectDNEnabled
            /// is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertSubjectDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertSubjectDnAlias
            {
                get => _xForwardedForClientCertSubjectDnAlias;
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
                    _xForwardedForClientCertSubjectDnAlias = value;
                }
            }

            private object? _xForwardedForClientCertSubjectDnEnabled;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertSubjectDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-subjectdn header field to obtain information about the owner of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertSubjectDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertSubjectDnEnabled
            {
                get => _xForwardedForClientCertSubjectDnEnabled;
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
                    _xForwardedForClientCertSubjectDnEnabled = value;
                }
            }

            private object? _xForwardedForClientSourceIpsEnabled;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientSourceIpsEnabled:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientSourceIpsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientSourceIpsEnabled
            {
                get => _xForwardedForClientSourceIpsEnabled;
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
                    _xForwardedForClientSourceIpsEnabled = value;
                }
            }

            private object? _xForwardedForClientSourceIpsTrusted;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientSourceIpsTrusted:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientSourceIpsTrusted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientSourceIpsTrusted
            {
                get => _xForwardedForClientSourceIpsTrusted;
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
                    _xForwardedForClientSourceIpsTrusted = value;
                }
            }

            private object? _xForwardedForClientSrcPortEnabled;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientSrcPortEnabled: Specifies whether to use the X-Forwarded-Client-Port header field to obtain the port of the ALB client.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientSrcPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientSrcPortEnabled
            {
                get => _xForwardedForClientSrcPortEnabled;
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
                    _xForwardedForClientSrcPortEnabled = value;
                }
            }

            private object? _xForwardedForEnabled;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForEnabled: Specifies whether to use the X-Forwarded-For header field to obtain the real IP address of the client.
            /// Valid values: true and false.
            /// Default value: true.
            /// Note HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForEnabled
            {
                get => _xForwardedForEnabled;
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
                    _xForwardedForEnabled = value;
                }
            }

            private object? _xForwardedForHostEnabled;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForHostEnabled: Whether to enable obtaining the domain name of the client accessing the load balancer instance through the X-Forwarded-Host header field. Values:
            /// true: Yes.
            /// false (default): No.
            /// Note: HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForHostEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForHostEnabled
            {
                get => _xForwardedForHostEnabled;
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
                    _xForwardedForHostEnabled = value;
                }
            }

            private object? _xForwardedForProcessingMode;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForProcessingMode: The mode for handling the X-Forwarded-For header field. This value takes effect only when XForwardedForEnabled is true. Possible values:
            /// append (default): Append.
            /// remove: Remove.
            /// Note: When configured as append, the last hop IP is added to the X-Forwarded-For header field before the request is sent to the backend service.
            /// When configured as remove, the X-Forwarded-For header is deleted before the request is sent to the backend service, regardless of whether the request carries the X-Forwarded-For header field.This parameter is supported by both HTTP and HTTPS listeners.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForProcessingMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForProcessingMode
            {
                get => _xForwardedForProcessingMode;
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
                    _xForwardedForProcessingMode = value;
                }
            }

            private object? _xForwardedForProtoEnabled;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForProtoEnabled: Specifies whether to use the X-Forwarded-Proto header field to obtain the listener protocol of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note: HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForProtoEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForProtoEnabled
            {
                get => _xForwardedForProtoEnabled;
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
                    _xForwardedForProtoEnabled = value;
                }
            }

            private object? _xForwardedForSlbIdEnabled;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbIdEnabled: Specifies whether to use the SLB-ID header field to obtain the ID of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForSlbIdEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForSlbIdEnabled
            {
                get => _xForwardedForSlbIdEnabled;
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
                    _xForwardedForSlbIdEnabled = value;
                }
            }

            private object? _xForwardedForSlbPortEnabled;

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbPortEnabled: Specifies whether to use the X-Forwarded-Port header field to obtain the listener port of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForSlbPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForSlbPortEnabled
            {
                get => _xForwardedForSlbPortEnabled;
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
                    _xForwardedForSlbPortEnabled = value;
                }
            }
        }
    }
}
