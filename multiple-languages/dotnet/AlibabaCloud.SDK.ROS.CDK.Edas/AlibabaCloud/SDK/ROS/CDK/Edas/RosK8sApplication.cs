using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>A ROS template type:  `ALIYUN::EDAS::K8sApplication`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplicationProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosK8sApplication : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::EDAS::K8sApplication`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosK8sApplication(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Edas.IRosK8sApplicationProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Edas.IRosK8sApplicationProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosK8sApplication(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosK8sApplication(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication))!;

        /// <remarks>
        /// <strong>Attribute</strong>: AppId: The ID of the application.
        /// </remarks>
        [JsiiProperty(name: "attrAppId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAppId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: AppName: The name of the application.
        /// </remarks>
        [JsiiProperty(name: "attrAppName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAppName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ChangeOrderId: The ID of the change process.
        /// </remarks>
        [JsiiProperty(name: "attrChangeOrderId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrChangeOrderId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterId: The cluster ID of the application.
        /// </remarks>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrClusterId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: CsClusterId: The K8s cluster ID of the application.
        /// </remarks>
        [JsiiProperty(name: "attrCsClusterId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCsClusterId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: appName: The name of the application. The name must start with a letter and can contain digits,
        /// letters, and hyphens (-). It can be up to 36 characters in length.
        /// </remarks>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AppName
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
        /// <strong>Property</strong>: clusterId: The cluster ID. You can query the cluster ID by calling the ListCluster operation.
        /// For more information, see ListCluster.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ClusterId
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
        /// <strong>Property</strong>: applicationDescription: The description of the application.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "applicationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ApplicationDescription
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
        /// <strong>Property</strong>: command: The command that is specified. If it is specified, it replaces the startup command in the image when the image is started.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Command
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
        /// <strong>Property</strong>: commandArgs: The collection of commands. For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "commandArgs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.CommandArgsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? CommandArgs
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
                                    case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ICommandArgsProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ICommandArgsProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ICommandArgsProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
        /// <strong>Property</strong>: deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes. The value true indicates yes, whereas other values indicate no.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deployAcrossNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeployAcrossNodes
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
        /// <strong>Property</strong>: deployAcrossZones: Specifies whether to distribute application instances to multiple zones. The value true indicates yes, whereas other values indicate no.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deployAcrossZones", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeployAcrossZones
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
        /// <strong>Property</strong>: edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.
        /// Note This parameter is not supported when you deploy an application by using images.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "edasContainerVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EdasContainerVersion
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
        /// <strong>Property</strong>: enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableAhas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EnableAhas
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
        /// <strong>Property</strong>: envs: The collection of deployment environment variables. For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "envs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.EnvsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Envs
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
                                    case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IEnvsProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IEnvsProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IEnvsProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
        /// <strong>Property</strong>: imageUrl: The image URL. When PackageType is set to Image, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ImageUrl
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
        /// <strong>Property</strong>: internetSlbId: The ID of the Internet-facing SLB instance. If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InternetSlbId
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
        /// <strong>Property</strong>: internetSlbPort: The frontend port of the Internet-facing SLB instance. Valid values: 1 to 65535.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetSlbPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InternetSlbPort
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
        /// <strong>Property</strong>: internetSlbProtocol: The protocol of the Internet-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetSlbProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InternetSlbProtocol
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
        /// <strong>Property</strong>: internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetTargetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InternetTargetPort
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
        /// <strong>Property</strong>: intranetSlbId: The ID of the internal-facing SLB instance. If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "intranetSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IntranetSlbId
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
        /// <strong>Property</strong>: intranetSlbPort: The frontend port of the internal-facing SLB instance. Valid values: 1 to 65535.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "intranetSlbPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IntranetSlbPort
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
        /// <strong>Property</strong>: intranetSlbProtocol: The protocol of the internal-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "intranetSlbProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IntranetSlbProtocol
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
        /// <strong>Property</strong>: intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application. Valid values: 1 to 65535.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "intranetTargetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IntranetTargetPort
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
        /// <strong>Property</strong>: isMultilingualApp: Specifies whether the application is a multi-language application.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "isMultilingualApp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IsMultilingualApp
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
        /// <strong>Property</strong>: javaStartUpConfig: The configuration of Java startup parameters for a Java application. These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
        /// The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "javaStartUpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.JavaStartUpConfigProperty\"}]}}", isOptional: true)]
        public virtual object? JavaStartUpConfig
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
                        case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IJavaStartUpConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IJavaStartUpConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends.
        /// Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "jdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Jdk
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
        /// <strong>Property</strong>: limitCpu: The maximum number of CPUs allowed for each application instance when the application
        /// is running. Unit: cores.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "limitCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? LimitCpu
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
        /// <strong>Property</strong>: limitMem: The maximum amount of memory allowed for each application instance when the application is running. Unit: MB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "limitMem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? LimitMem
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
        /// <strong>Property</strong>: liveness: The liveness check on the container.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "liveness", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.LivenessProperty\"}]}}", isOptional: true)]
        public virtual object? Liveness
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
                        case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ILivenessProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ILivenessProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: localVolume: The configuration for mounting host files to the container where the application is running. For example, the value can be [{"type":"", "nodePath":"/localfiles", "mountPath":"/app/files"}, {"type":"Directory", "nodePath":"/mnt", "mountPath":"/app/storage"}].
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "localVolume", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.LocalVolumeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? LocalVolume
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
                                    case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ILocalVolumeProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ILocalVolumeProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ILocalVolumeProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
        /// <strong>Property</strong>: logicalRegionId: The ID of the EDAS namespace. This parameter is required for a non-default namespace.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? LogicalRegionId
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
        /// <strong>Property</strong>: mountDescs: The description of the NAS mounting configuration. For example, the value can be [{"NasPath": "/k8s","MountPath": "/mnt"}, {"NasPath": "/files", "MountPath": "/app/files"}].
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mountDescs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MountDescsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? MountDescs
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
                                    case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMountDescsProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMountDescsProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMountDescsProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
        /// <strong>Property</strong>: namespace: The namespace of the Kubernetes cluster. This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Namespace
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
        /// <strong>Property</strong>: nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running. The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
        /// target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nasId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? NasId
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
        /// <strong>Property</strong>: packageType: The type of the deployment package. Valid values: FatJar, WAR, and Image.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PackageType
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
        /// <strong>Property</strong>: packageUrl: The URL of the deployment package. This parameter must be set for the applications
        /// that are deployed by using FatJar or WAR packages.
        /// Note The version of SDK for Java or Python must be 2.44.0 or later.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "packageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PackageUrl
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
        /// <strong>Property</strong>: packageVersion: The version of the deployment package. This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
        /// Note The version of SDK for Java or Python must be 2.44.0 or later.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "packageVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PackageVersion
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
        /// <strong>Property</strong>: postStart: The post-start script. For example, {"Exec": {"Command": ["ls", "/"]}}.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "postStart", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PostStartProperty\"}]}}", isOptional: true)]
        public virtual object? PostStart
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
                        case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: preStop: The pre-stop script. For example, {"Exec": {"Command": ["ls", "/"]}}.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preStop", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PreStopProperty\"}]}}", isOptional: true)]
        public virtual object? PreStop
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
                        case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: readiness: The readiness check on the container.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "readiness", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessProperty\"}]}}", isOptional: true)]
        public virtual object? Readiness
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
                        case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: replicas: The number of instances for the application that you want to create. Default: 1
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "replicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Replicas
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
        /// <strong>Property</strong>: repoId: The ID of the image repository.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "repoId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RepoId
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
        /// <strong>Property</strong>: requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created. Unit: cores. The value 0 indicates no limit.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestsCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RequestsCpu
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
        /// <strong>Property</strong>: requestsMem: The maximum amount of memory allowed for each application instance when the application
        /// is created. Unit: MB. The value 0 indicates no limit.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestsMem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RequestsMem
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
        /// <strong>Property</strong>: runtimeClassName: The type of the container runtime. This parameter is applicable only to clusters that use sandboxed containers.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "runtimeClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RuntimeClassName
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
        /// <strong>Property</strong>: slsConfigs: The Logstore configurations.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slsConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.SlsConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? SlsConfigs
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
                                    case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ISlsConfigsProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ISlsConfigsProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ISlsConfigsProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
        /// <strong>Property</strong>: storageType: Only SSD is supported.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? StorageType
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
        /// <strong>Property</strong>: timeout: The timeout interval of the change process. Unit: seconds.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Timeout
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
        /// <strong>Property</strong>: uriEncoding: The uniform resource identifier (URI) encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
        /// Note If this parameter is not specified in application configuration, the default URI encoding
        /// scheme in the Tomcat container is applied.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "uriEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? UriEncoding
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
        /// <strong>Property</strong>: useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.
        /// Note If this parameter is not specified in application configuration, the default value
        /// false is applied.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "useBodyEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? UseBodyEncoding
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
        /// <strong>Property</strong>: webContainer: The version of the Tomcat container on which the deployment package of the application depends. This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "webContainer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? WebContainer
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
        /// <strong>Property</strong>: webContainerConfig: The Tomcat container configuration.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "webContainerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.WebContainerConfigProperty\"}]}}", isOptional: true)]
        public virtual object? WebContainerConfig
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
                        case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IWebContainerConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IWebContainerConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }
        [JsiiInterface(nativeType: typeof(ICommandArgsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.CommandArgsProperty")]
        public interface ICommandArgsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: argument: undefined
            /// </remarks>
            [JsiiProperty(name: "argument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Argument
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ICommandArgsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.CommandArgsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ICommandArgsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: argument: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "argument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Argument
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.CommandArgsProperty")]
        public class CommandArgsProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ICommandArgsProperty
        {
            private object? _argument;

            /// <remarks>
            /// <strong>Property</strong>: argument: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "argument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Argument
            {
                get => _argument;
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
                    _argument = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IConcGCThreadsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ConcGCThreadsProperty")]
        public interface IConcGCThreadsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IConcGCThreadsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ConcGCThreadsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IConcGCThreadsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.ConcGCThreadsProperty")]
        public class ConcGCThreadsProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IConcGCThreadsProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ICustomParamsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.CustomParamsProperty")]
        public interface ICustomParamsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ICustomParamsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.CustomParamsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ICustomParamsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.CustomParamsProperty")]
        public class CustomParamsProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ICustomParamsProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IEnvsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.EnvsProperty")]
        public interface IEnvsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: undefined
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Name
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IEnvsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.EnvsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IEnvsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Name
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.EnvsProperty")]
        public class EnvsProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IEnvsProperty
        {
            private object? _name;

            /// <remarks>
            /// <strong>Property</strong>: name: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => _name;
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
                    _name = value;
                }
            }

            private object? _value;

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get => _value;
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
                    _value = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IExecProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ExecProperty")]
        public interface IExecProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: command: undefined
            /// </remarks>
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Command
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IExecProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ExecProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IExecProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: command: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Command
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.ExecProperty")]
        public class ExecProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IExecProperty
        {
            private object? _command;

            /// <remarks>
            /// <strong>Property</strong>: command: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Command
            {
                get => _command;
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
                    _command = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IG1HeapRegionSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.G1HeapRegionSizeProperty")]
        public interface IG1HeapRegionSizeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IG1HeapRegionSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.G1HeapRegionSizeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IG1HeapRegionSizeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.G1HeapRegionSizeProperty")]
        public class G1HeapRegionSizeProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IG1HeapRegionSizeProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IGCLogFilePathProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFilePathProperty")]
        public interface IGCLogFilePathProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IGCLogFilePathProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFilePathProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IGCLogFilePathProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFilePathProperty")]
        public class GCLogFilePathProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IGCLogFilePathProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IGCLogFileSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFileSizeProperty")]
        public interface IGCLogFileSizeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IGCLogFileSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFileSizeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IGCLogFileSizeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFileSizeProperty")]
        public class GCLogFileSizeProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IGCLogFileSizeProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IHeapDumpOnOutOfMemoryErrorProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty")]
        public interface IHeapDumpOnOutOfMemoryErrorProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHeapDumpOnOutOfMemoryErrorProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHeapDumpOnOutOfMemoryErrorProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty")]
        public class HeapDumpOnOutOfMemoryErrorProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHeapDumpOnOutOfMemoryErrorProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IHeapDumpPathProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpPathProperty")]
        public interface IHeapDumpPathProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHeapDumpPathProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpPathProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHeapDumpPathProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpPathProperty")]
        public class HeapDumpPathProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHeapDumpPathProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IHttpGetHttpHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetHttpHeadersProperty")]
        public interface IHttpGetHttpHeadersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: undefined
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Name
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHttpGetHttpHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetHttpHeadersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpGetHttpHeadersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Name
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetHttpHeadersProperty")]
        public class HttpGetHttpHeadersProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpGetHttpHeadersProperty
        {
            private object? _name;

            /// <remarks>
            /// <strong>Property</strong>: name: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => _name;
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
                    _name = value;
                }
            }

            private object? _value;

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get => _value;
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
                    _value = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IHttpGetProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetProperty")]
        public interface IHttpGetProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Host
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpHeaders: undefined
            /// </remarks>
            [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpHeaders
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: path: undefined
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Path
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: scheme: undefined
            /// </remarks>
            [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Scheme
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHttpGetProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpGetProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: host: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Host
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpHeaders: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? HttpHeaders
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: path: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Path
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: scheme: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Scheme
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetProperty")]
        public class HttpGetProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpGetProperty
        {
            private object? _host;

            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Host
            {
                get => _host;
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
                    _host = value;
                }
            }

            private object? _httpHeaders;

            /// <remarks>
            /// <strong>Property</strong>: httpHeaders: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HttpHeaders
            {
                get => _httpHeaders;
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
                                        case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpHeadersProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpHeadersProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpHeadersProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
                    _httpHeaders = value;
                }
            }

            private object? _path;

            /// <remarks>
            /// <strong>Property</strong>: path: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Path
            {
                get => _path;
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
                    _path = value;
                }
            }

            private object? _port;

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => _port;
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
                    _port = value;
                }
            }

            private object? _scheme;

            /// <remarks>
            /// <strong>Property</strong>: scheme: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scheme
            {
                get => _scheme;
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
                    _scheme = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IHttpHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.HttpHeadersProperty")]
        public interface IHttpHeadersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: undefined
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Name
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHttpHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.HttpHeadersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpHeadersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Name
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.HttpHeadersProperty")]
        public class HttpHeadersProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpHeadersProperty
        {
            private object? _name;

            /// <remarks>
            /// <strong>Property</strong>: name: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => _name;
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
                    _name = value;
                }
            }

            private object? _value;

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get => _value;
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
                    _value = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IInitialHeapSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.InitialHeapSizeProperty")]
        public interface IInitialHeapSizeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IInitialHeapSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.InitialHeapSizeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IInitialHeapSizeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.InitialHeapSizeProperty")]
        public class InitialHeapSizeProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IInitialHeapSizeProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IJavaStartUpConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.JavaStartUpConfigProperty")]
        public interface IJavaStartUpConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: concGcThreads: Number of threads concurrent gc will use.
            /// </remarks>
            [JsiiProperty(name: "concGcThreads", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ConcGCThreadsProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ConcGcThreads
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: customParams: If the preceding options cannot meet your requirements, you can use custom parameters. Separate parameters with spaces.
            /// </remarks>
            [JsiiProperty(name: "customParams", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.CustomParamsProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CustomParams
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: g1HeapRegionSize: Size of the G1 regions.
            /// </remarks>
            [JsiiProperty(name: "g1HeapRegionSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.G1HeapRegionSizeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? G1HeapRegionSize
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: gcLogFilePath: GC log directory.
            /// </remarks>
            [JsiiProperty(name: "gcLogFilePath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFilePathProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? GcLogFilePath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: gcLogFileSize: GC log file size.
            /// </remarks>
            [JsiiProperty(name: "gcLogFileSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFileSizeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? GcLogFileSize
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: heapDumpOnOutOfMemoryError: Whether dump memory when OOM occurs.
            /// </remarks>
            [JsiiProperty(name: "heapDumpOnOutOfMemoryError", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HeapDumpOnOutOfMemoryError
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: heapDumpPath: Dump File Path.
            /// </remarks>
            [JsiiProperty(name: "heapDumpPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpPathProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HeapDumpPath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: initialHeapSize: The size of the initial heap. Unit: MB. The value 0 indicates that the size is unlimited.
            /// </remarks>
            [JsiiProperty(name: "initialHeapSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.InitialHeapSizeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InitialHeapSize
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxDirectMemorySize: The maximum size of NIO direct memory. Unit: MB.
            /// </remarks>
            [JsiiProperty(name: "maxDirectMemorySize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxDirectMemorySizeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MaxDirectMemorySize
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxHeapSize: The maximum heap size. Unit: MB. Value range: 0 to (0.85 x Available memory for ECS instances of the application)
            /// </remarks>
            [JsiiProperty(name: "maxHeapSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxHeapSizeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MaxHeapSize
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxNewSize: The maximum size of young generation. Unit: MB. The value max_uintx indicates that no upper limit is specified for memory usage.
            /// </remarks>
            [JsiiProperty(name: "maxNewSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxNewSizeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MaxNewSize
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxPermSize: The maximum size of permanent generation. Unit: MB.
            /// </remarks>
            [JsiiProperty(name: "maxPermSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxPermSizeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MaxPermSize
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nacosUseCloudNamespaceParsing: Whether enable automatic namespace parsing.
            /// </remarks>
            [JsiiProperty(name: "nacosUseCloudNamespaceParsing", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseCloudNamespaceParsingProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NacosUseCloudNamespaceParsing
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nacosUseEndpointParsingRule: Whether enable rule parsing.
            /// </remarks>
            [JsiiProperty(name: "nacosUseEndpointParsingRule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseEndpointParsingRuleProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NacosUseEndpointParsingRule
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newRatio: Old/Young Generation Memory Size Ratio.
            /// </remarks>
            [JsiiProperty(name: "newRatio", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NewRatioProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NewRatio
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newSize: Initial Young Generation Size (MB).
            /// </remarks>
            [JsiiProperty(name: "newSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NewSizeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NewSize
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: oldGarbageCollector: It is used to configure the old generation garbage collector. You must configure the young generation garbage collector first.
            /// </remarks>
            [JsiiProperty(name: "oldGarbageCollector", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.OldGarbageCollectorProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OldGarbageCollector
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: parallelGcThreads: Number of parallel threads parallel gc will use.
            /// </remarks>
            [JsiiProperty(name: "parallelGcThreads", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ParallelGCThreadsProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ParallelGcThreads
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: permSize: Initial Permanent Generation Size (MB).
            /// </remarks>
            [JsiiProperty(name: "permSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PermSizeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PermSize
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: printGc:
            /// </remarks>
            [JsiiProperty(name: "printGc", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PrintGc
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: printGcDateStamps:
            /// </remarks>
            [JsiiProperty(name: "printGcDateStamps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCDateStampsProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PrintGcDateStamps
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: survivorRatio: Eden/Survivor Memory Size Ratio.
            /// </remarks>
            [JsiiProperty(name: "survivorRatio", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.SurvivorRatioProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SurvivorRatio
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: threadStackSize: Thread stack size (KB).
            /// </remarks>
            [JsiiProperty(name: "threadStackSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ThreadStackSizeProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ThreadStackSize
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: useGcLogFileRotation:
            /// </remarks>
            [JsiiProperty(name: "useGcLogFileRotation", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.UseGCLogFileRotationProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UseGcLogFileRotation
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: youngGarbageCollector: It is used to configure young generation garbage collector.
            /// </remarks>
            [JsiiProperty(name: "youngGarbageCollector", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.YoungGarbageCollectorProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? YoungGarbageCollector
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IJavaStartUpConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.JavaStartUpConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IJavaStartUpConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: concGcThreads: Number of threads concurrent gc will use.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "concGcThreads", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ConcGCThreadsProperty\"}]}}", isOptional: true)]
                public object? ConcGcThreads
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: customParams: If the preceding options cannot meet your requirements, you can use custom parameters. Separate parameters with spaces.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "customParams", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.CustomParamsProperty\"}]}}", isOptional: true)]
                public object? CustomParams
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: g1HeapRegionSize: Size of the G1 regions.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "g1HeapRegionSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.G1HeapRegionSizeProperty\"}]}}", isOptional: true)]
                public object? G1HeapRegionSize
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: gcLogFilePath: GC log directory.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "gcLogFilePath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFilePathProperty\"}]}}", isOptional: true)]
                public object? GcLogFilePath
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: gcLogFileSize: GC log file size.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "gcLogFileSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFileSizeProperty\"}]}}", isOptional: true)]
                public object? GcLogFileSize
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: heapDumpOnOutOfMemoryError: Whether dump memory when OOM occurs.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "heapDumpOnOutOfMemoryError", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty\"}]}}", isOptional: true)]
                public object? HeapDumpOnOutOfMemoryError
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: heapDumpPath: Dump File Path.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "heapDumpPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpPathProperty\"}]}}", isOptional: true)]
                public object? HeapDumpPath
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: initialHeapSize: The size of the initial heap. Unit: MB. The value 0 indicates that the size is unlimited.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "initialHeapSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.InitialHeapSizeProperty\"}]}}", isOptional: true)]
                public object? InitialHeapSize
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxDirectMemorySize: The maximum size of NIO direct memory. Unit: MB.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxDirectMemorySize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxDirectMemorySizeProperty\"}]}}", isOptional: true)]
                public object? MaxDirectMemorySize
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxHeapSize: The maximum heap size. Unit: MB. Value range: 0 to (0.85 x Available memory for ECS instances of the application)
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxHeapSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxHeapSizeProperty\"}]}}", isOptional: true)]
                public object? MaxHeapSize
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxNewSize: The maximum size of young generation. Unit: MB. The value max_uintx indicates that no upper limit is specified for memory usage.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxNewSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxNewSizeProperty\"}]}}", isOptional: true)]
                public object? MaxNewSize
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxPermSize: The maximum size of permanent generation. Unit: MB.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxPermSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxPermSizeProperty\"}]}}", isOptional: true)]
                public object? MaxPermSize
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nacosUseCloudNamespaceParsing: Whether enable automatic namespace parsing.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nacosUseCloudNamespaceParsing", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseCloudNamespaceParsingProperty\"}]}}", isOptional: true)]
                public object? NacosUseCloudNamespaceParsing
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nacosUseEndpointParsingRule: Whether enable rule parsing.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nacosUseEndpointParsingRule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseEndpointParsingRuleProperty\"}]}}", isOptional: true)]
                public object? NacosUseEndpointParsingRule
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newRatio: Old/Young Generation Memory Size Ratio.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newRatio", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NewRatioProperty\"}]}}", isOptional: true)]
                public object? NewRatio
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newSize: Initial Young Generation Size (MB).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NewSizeProperty\"}]}}", isOptional: true)]
                public object? NewSize
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: oldGarbageCollector: It is used to configure the old generation garbage collector. You must configure the young generation garbage collector first.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "oldGarbageCollector", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.OldGarbageCollectorProperty\"}]}}", isOptional: true)]
                public object? OldGarbageCollector
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: parallelGcThreads: Number of parallel threads parallel gc will use.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "parallelGcThreads", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ParallelGCThreadsProperty\"}]}}", isOptional: true)]
                public object? ParallelGcThreads
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: permSize: Initial Permanent Generation Size (MB).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "permSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PermSizeProperty\"}]}}", isOptional: true)]
                public object? PermSize
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: printGc:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "printGc", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCProperty\"}]}}", isOptional: true)]
                public object? PrintGc
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: printGcDateStamps:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "printGcDateStamps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCDateStampsProperty\"}]}}", isOptional: true)]
                public object? PrintGcDateStamps
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: survivorRatio: Eden/Survivor Memory Size Ratio.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "survivorRatio", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.SurvivorRatioProperty\"}]}}", isOptional: true)]
                public object? SurvivorRatio
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: threadStackSize: Thread stack size (KB).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "threadStackSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ThreadStackSizeProperty\"}]}}", isOptional: true)]
                public object? ThreadStackSize
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: useGcLogFileRotation:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "useGcLogFileRotation", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.UseGCLogFileRotationProperty\"}]}}", isOptional: true)]
                public object? UseGcLogFileRotation
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: youngGarbageCollector: It is used to configure young generation garbage collector.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "youngGarbageCollector", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.YoungGarbageCollectorProperty\"}]}}", isOptional: true)]
                public object? YoungGarbageCollector
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.JavaStartUpConfigProperty")]
        public class JavaStartUpConfigProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IJavaStartUpConfigProperty
        {
            private object? _concGcThreads;

            /// <remarks>
            /// <strong>Property</strong>: concGcThreads: Number of threads concurrent gc will use.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "concGcThreads", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ConcGCThreadsProperty\"}]}}", isOptional: true)]
            public object? ConcGcThreads
            {
                get => _concGcThreads;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IConcGCThreadsProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IConcGCThreadsProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _concGcThreads = value;
                }
            }

            private object? _customParams;

            /// <remarks>
            /// <strong>Property</strong>: customParams: If the preceding options cannot meet your requirements, you can use custom parameters. Separate parameters with spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customParams", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.CustomParamsProperty\"}]}}", isOptional: true)]
            public object? CustomParams
            {
                get => _customParams;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ICustomParamsProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ICustomParamsProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _customParams = value;
                }
            }

            private object? _g1HeapRegionSize;

            /// <remarks>
            /// <strong>Property</strong>: g1HeapRegionSize: Size of the G1 regions.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "g1HeapRegionSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.G1HeapRegionSizeProperty\"}]}}", isOptional: true)]
            public object? G1HeapRegionSize
            {
                get => _g1HeapRegionSize;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IG1HeapRegionSizeProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IG1HeapRegionSizeProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _g1HeapRegionSize = value;
                }
            }

            private object? _gcLogFilePath;

            /// <remarks>
            /// <strong>Property</strong>: gcLogFilePath: GC log directory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gcLogFilePath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFilePathProperty\"}]}}", isOptional: true)]
            public object? GcLogFilePath
            {
                get => _gcLogFilePath;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IGCLogFilePathProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IGCLogFilePathProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _gcLogFilePath = value;
                }
            }

            private object? _gcLogFileSize;

            /// <remarks>
            /// <strong>Property</strong>: gcLogFileSize: GC log file size.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gcLogFileSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.GCLogFileSizeProperty\"}]}}", isOptional: true)]
            public object? GcLogFileSize
            {
                get => _gcLogFileSize;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IGCLogFileSizeProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IGCLogFileSizeProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _gcLogFileSize = value;
                }
            }

            private object? _heapDumpOnOutOfMemoryError;

            /// <remarks>
            /// <strong>Property</strong>: heapDumpOnOutOfMemoryError: Whether dump memory when OOM occurs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "heapDumpOnOutOfMemoryError", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpOnOutOfMemoryErrorProperty\"}]}}", isOptional: true)]
            public object? HeapDumpOnOutOfMemoryError
            {
                get => _heapDumpOnOutOfMemoryError;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHeapDumpOnOutOfMemoryErrorProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHeapDumpOnOutOfMemoryErrorProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _heapDumpOnOutOfMemoryError = value;
                }
            }

            private object? _heapDumpPath;

            /// <remarks>
            /// <strong>Property</strong>: heapDumpPath: Dump File Path.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "heapDumpPath", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HeapDumpPathProperty\"}]}}", isOptional: true)]
            public object? HeapDumpPath
            {
                get => _heapDumpPath;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHeapDumpPathProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHeapDumpPathProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _heapDumpPath = value;
                }
            }

            private object? _initialHeapSize;

            /// <remarks>
            /// <strong>Property</strong>: initialHeapSize: The size of the initial heap. Unit: MB. The value 0 indicates that the size is unlimited.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "initialHeapSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.InitialHeapSizeProperty\"}]}}", isOptional: true)]
            public object? InitialHeapSize
            {
                get => _initialHeapSize;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IInitialHeapSizeProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IInitialHeapSizeProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _initialHeapSize = value;
                }
            }

            private object? _maxDirectMemorySize;

            /// <remarks>
            /// <strong>Property</strong>: maxDirectMemorySize: The maximum size of NIO direct memory. Unit: MB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxDirectMemorySize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxDirectMemorySizeProperty\"}]}}", isOptional: true)]
            public object? MaxDirectMemorySize
            {
                get => _maxDirectMemorySize;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxDirectMemorySizeProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxDirectMemorySizeProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _maxDirectMemorySize = value;
                }
            }

            private object? _maxHeapSize;

            /// <remarks>
            /// <strong>Property</strong>: maxHeapSize: The maximum heap size. Unit: MB. Value range: 0 to (0.85 x Available memory for ECS instances of the application)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxHeapSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxHeapSizeProperty\"}]}}", isOptional: true)]
            public object? MaxHeapSize
            {
                get => _maxHeapSize;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxHeapSizeProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxHeapSizeProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _maxHeapSize = value;
                }
            }

            private object? _maxNewSize;

            /// <remarks>
            /// <strong>Property</strong>: maxNewSize: The maximum size of young generation. Unit: MB. The value max_uintx indicates that no upper limit is specified for memory usage.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxNewSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxNewSizeProperty\"}]}}", isOptional: true)]
            public object? MaxNewSize
            {
                get => _maxNewSize;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxNewSizeProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxNewSizeProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _maxNewSize = value;
                }
            }

            private object? _maxPermSize;

            /// <remarks>
            /// <strong>Property</strong>: maxPermSize: The maximum size of permanent generation. Unit: MB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxPermSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MaxPermSizeProperty\"}]}}", isOptional: true)]
            public object? MaxPermSize
            {
                get => _maxPermSize;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxPermSizeProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxPermSizeProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _maxPermSize = value;
                }
            }

            private object? _nacosUseCloudNamespaceParsing;

            /// <remarks>
            /// <strong>Property</strong>: nacosUseCloudNamespaceParsing: Whether enable automatic namespace parsing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nacosUseCloudNamespaceParsing", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseCloudNamespaceParsingProperty\"}]}}", isOptional: true)]
            public object? NacosUseCloudNamespaceParsing
            {
                get => _nacosUseCloudNamespaceParsing;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INacosUseCloudNamespaceParsingProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INacosUseCloudNamespaceParsingProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _nacosUseCloudNamespaceParsing = value;
                }
            }

            private object? _nacosUseEndpointParsingRule;

            /// <remarks>
            /// <strong>Property</strong>: nacosUseEndpointParsingRule: Whether enable rule parsing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nacosUseEndpointParsingRule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseEndpointParsingRuleProperty\"}]}}", isOptional: true)]
            public object? NacosUseEndpointParsingRule
            {
                get => _nacosUseEndpointParsingRule;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INacosUseEndpointParsingRuleProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INacosUseEndpointParsingRuleProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _nacosUseEndpointParsingRule = value;
                }
            }

            private object? _newRatio;

            /// <remarks>
            /// <strong>Property</strong>: newRatio: Old/Young Generation Memory Size Ratio.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newRatio", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NewRatioProperty\"}]}}", isOptional: true)]
            public object? NewRatio
            {
                get => _newRatio;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INewRatioProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INewRatioProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _newRatio = value;
                }
            }

            private object? _newSize;

            /// <remarks>
            /// <strong>Property</strong>: newSize: Initial Young Generation Size (MB).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.NewSizeProperty\"}]}}", isOptional: true)]
            public object? NewSize
            {
                get => _newSize;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INewSizeProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INewSizeProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _newSize = value;
                }
            }

            private object? _oldGarbageCollector;

            /// <remarks>
            /// <strong>Property</strong>: oldGarbageCollector: It is used to configure the old generation garbage collector. You must configure the young generation garbage collector first.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oldGarbageCollector", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.OldGarbageCollectorProperty\"}]}}", isOptional: true)]
            public object? OldGarbageCollector
            {
                get => _oldGarbageCollector;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IOldGarbageCollectorProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IOldGarbageCollectorProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _oldGarbageCollector = value;
                }
            }

            private object? _parallelGcThreads;

            /// <remarks>
            /// <strong>Property</strong>: parallelGcThreads: Number of parallel threads parallel gc will use.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parallelGcThreads", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ParallelGCThreadsProperty\"}]}}", isOptional: true)]
            public object? ParallelGcThreads
            {
                get => _parallelGcThreads;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IParallelGCThreadsProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IParallelGCThreadsProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _parallelGcThreads = value;
                }
            }

            private object? _permSize;

            /// <remarks>
            /// <strong>Property</strong>: permSize: Initial Permanent Generation Size (MB).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "permSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PermSizeProperty\"}]}}", isOptional: true)]
            public object? PermSize
            {
                get => _permSize;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPermSizeProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPermSizeProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _permSize = value;
                }
            }

            private object? _printGc;

            /// <remarks>
            /// <strong>Property</strong>: printGc:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "printGc", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCProperty\"}]}}", isOptional: true)]
            public object? PrintGc
            {
                get => _printGc;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPrintGCProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPrintGCProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _printGc = value;
                }
            }

            private object? _printGcDateStamps;

            /// <remarks>
            /// <strong>Property</strong>: printGcDateStamps:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "printGcDateStamps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCDateStampsProperty\"}]}}", isOptional: true)]
            public object? PrintGcDateStamps
            {
                get => _printGcDateStamps;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPrintGCDateStampsProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPrintGCDateStampsProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _printGcDateStamps = value;
                }
            }

            private object? _survivorRatio;

            /// <remarks>
            /// <strong>Property</strong>: survivorRatio: Eden/Survivor Memory Size Ratio.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "survivorRatio", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.SurvivorRatioProperty\"}]}}", isOptional: true)]
            public object? SurvivorRatio
            {
                get => _survivorRatio;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ISurvivorRatioProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ISurvivorRatioProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _survivorRatio = value;
                }
            }

            private object? _threadStackSize;

            /// <remarks>
            /// <strong>Property</strong>: threadStackSize: Thread stack size (KB).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "threadStackSize", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ThreadStackSizeProperty\"}]}}", isOptional: true)]
            public object? ThreadStackSize
            {
                get => _threadStackSize;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IThreadStackSizeProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IThreadStackSizeProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _threadStackSize = value;
                }
            }

            private object? _useGcLogFileRotation;

            /// <remarks>
            /// <strong>Property</strong>: useGcLogFileRotation:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "useGcLogFileRotation", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.UseGCLogFileRotationProperty\"}]}}", isOptional: true)]
            public object? UseGcLogFileRotation
            {
                get => _useGcLogFileRotation;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IUseGCLogFileRotationProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IUseGCLogFileRotationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _useGcLogFileRotation = value;
                }
            }

            private object? _youngGarbageCollector;

            /// <remarks>
            /// <strong>Property</strong>: youngGarbageCollector: It is used to configure young generation garbage collector.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "youngGarbageCollector", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.YoungGarbageCollectorProperty\"}]}}", isOptional: true)]
            public object? YoungGarbageCollector
            {
                get => _youngGarbageCollector;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IYoungGarbageCollectorProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IYoungGarbageCollectorProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _youngGarbageCollector = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ILivenessProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.LivenessProperty")]
        public interface ILivenessProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: exec: undefined
            /// </remarks>
            [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ExecProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Exec
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: failureThreshold: undefined
            /// </remarks>
            [JsiiProperty(name: "failureThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FailureThreshold
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGet: undefined
            /// </remarks>
            [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpGet
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: initialDelaySeconds: undefined
            /// </remarks>
            [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InitialDelaySeconds
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: periodSeconds: undefined
            /// </remarks>
            [JsiiProperty(name: "periodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PeriodSeconds
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: successThreshold: undefined
            /// </remarks>
            [JsiiProperty(name: "successThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SuccessThreshold
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tcpSocket: undefined
            /// </remarks>
            [JsiiProperty(name: "tcpSocket", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.TcpSocketProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TcpSocket
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: timeoutSeconds: undefined
            /// </remarks>
            [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TimeoutSeconds
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ILivenessProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.LivenessProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ILivenessProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: exec: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ExecProperty\"}]}}", isOptional: true)]
                public object? Exec
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: failureThreshold: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "failureThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FailureThreshold
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpGet: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetProperty\"}]}}", isOptional: true)]
                public object? HttpGet
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: initialDelaySeconds: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InitialDelaySeconds
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: periodSeconds: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "periodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PeriodSeconds
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: successThreshold: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "successThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SuccessThreshold
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tcpSocket: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tcpSocket", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.TcpSocketProperty\"}]}}", isOptional: true)]
                public object? TcpSocket
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: timeoutSeconds: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TimeoutSeconds
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.LivenessProperty")]
        public class LivenessProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ILivenessProperty
        {
            private object? _exec;

            /// <remarks>
            /// <strong>Property</strong>: exec: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ExecProperty\"}]}}", isOptional: true)]
            public object? Exec
            {
                get => _exec;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IExecProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IExecProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _exec = value;
                }
            }

            private object? _failureThreshold;

            /// <remarks>
            /// <strong>Property</strong>: failureThreshold: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failureThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailureThreshold
            {
                get => _failureThreshold;
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
                    _failureThreshold = value;
                }
            }

            private object? _httpGet;

            /// <remarks>
            /// <strong>Property</strong>: httpGet: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetProperty\"}]}}", isOptional: true)]
            public object? HttpGet
            {
                get => _httpGet;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpGetProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpGetProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _httpGet = value;
                }
            }

            private object? _initialDelaySeconds;

            /// <remarks>
            /// <strong>Property</strong>: initialDelaySeconds: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InitialDelaySeconds
            {
                get => _initialDelaySeconds;
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
                    _initialDelaySeconds = value;
                }
            }

            private object? _periodSeconds;

            /// <remarks>
            /// <strong>Property</strong>: periodSeconds: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodSeconds
            {
                get => _periodSeconds;
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
                    _periodSeconds = value;
                }
            }

            private object? _successThreshold;

            /// <remarks>
            /// <strong>Property</strong>: successThreshold: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "successThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SuccessThreshold
            {
                get => _successThreshold;
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
                    _successThreshold = value;
                }
            }

            private object? _tcpSocket;

            /// <remarks>
            /// <strong>Property</strong>: tcpSocket: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tcpSocket", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.TcpSocketProperty\"}]}}", isOptional: true)]
            public object? TcpSocket
            {
                get => _tcpSocket;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ITcpSocketProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ITcpSocketProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _tcpSocket = value;
                }
            }

            private object? _timeoutSeconds;

            /// <remarks>
            /// <strong>Property</strong>: timeoutSeconds: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeoutSeconds
            {
                get => _timeoutSeconds;
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
                    _timeoutSeconds = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ILocalVolumeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.LocalVolumeProperty")]
        public interface ILocalVolumeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: mountPath: Specifies the path within the container.
            /// </remarks>
            [JsiiProperty(name: "mountPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MountPath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nodePath: Specifies the host path.
            /// </remarks>
            [JsiiProperty(name: "nodePath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NodePath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Specifies the mounting type.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Type
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ILocalVolumeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.LocalVolumeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ILocalVolumeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: mountPath: Specifies the path within the container.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mountPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MountPath
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nodePath: Specifies the host path.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nodePath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NodePath
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: type: Specifies the mounting type.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Type
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.LocalVolumeProperty")]
        public class LocalVolumeProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ILocalVolumeProperty
        {
            private object? _mountPath;

            /// <remarks>
            /// <strong>Property</strong>: mountPath: Specifies the path within the container.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mountPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MountPath
            {
                get => _mountPath;
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
                    _mountPath = value;
                }
            }

            private object? _nodePath;

            /// <remarks>
            /// <strong>Property</strong>: nodePath: Specifies the host path.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nodePath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NodePath
            {
                get => _nodePath;
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
                    _nodePath = value;
                }
            }

            private object? _type;

            /// <remarks>
            /// <strong>Property</strong>: type: Specifies the mounting type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
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
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _type = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IMaxDirectMemorySizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxDirectMemorySizeProperty")]
        public interface IMaxDirectMemorySizeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMaxDirectMemorySizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxDirectMemorySizeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxDirectMemorySizeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxDirectMemorySizeProperty")]
        public class MaxDirectMemorySizeProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxDirectMemorySizeProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IMaxHeapSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxHeapSizeProperty")]
        public interface IMaxHeapSizeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMaxHeapSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxHeapSizeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxHeapSizeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxHeapSizeProperty")]
        public class MaxHeapSizeProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxHeapSizeProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IMaxNewSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxNewSizeProperty")]
        public interface IMaxNewSizeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMaxNewSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxNewSizeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxNewSizeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxNewSizeProperty")]
        public class MaxNewSizeProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxNewSizeProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IMaxPermSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxPermSizeProperty")]
        public interface IMaxPermSizeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMaxPermSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxPermSizeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxPermSizeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.MaxPermSizeProperty")]
        public class MaxPermSizeProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMaxPermSizeProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IMountDescsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.MountDescsProperty")]
        public interface IMountDescsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: mountPath: Specifies the path to mount the file system to the container where the application is running.
            /// </remarks>
            [JsiiProperty(name: "mountPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MountPath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nasPath: Specifies the file storage path.
            /// </remarks>
            [JsiiProperty(name: "nasPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NasPath
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMountDescsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.MountDescsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMountDescsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: mountPath: Specifies the path to mount the file system to the container where the application is running.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mountPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MountPath
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nasPath: Specifies the file storage path.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nasPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NasPath
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.MountDescsProperty")]
        public class MountDescsProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IMountDescsProperty
        {
            private object? _mountPath;

            /// <remarks>
            /// <strong>Property</strong>: mountPath: Specifies the path to mount the file system to the container where the application is running.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mountPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MountPath
            {
                get => _mountPath;
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
                    _mountPath = value;
                }
            }

            private object? _nasPath;

            /// <remarks>
            /// <strong>Property</strong>: nasPath: Specifies the file storage path.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NasPath
            {
                get => _nasPath;
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
                    _nasPath = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(INacosUseCloudNamespaceParsingProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseCloudNamespaceParsingProperty")]
        public interface INacosUseCloudNamespaceParsingProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(INacosUseCloudNamespaceParsingProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseCloudNamespaceParsingProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INacosUseCloudNamespaceParsingProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseCloudNamespaceParsingProperty")]
        public class NacosUseCloudNamespaceParsingProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INacosUseCloudNamespaceParsingProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(INacosUseEndpointParsingRuleProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseEndpointParsingRuleProperty")]
        public interface INacosUseEndpointParsingRuleProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(INacosUseEndpointParsingRuleProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseEndpointParsingRuleProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INacosUseEndpointParsingRuleProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.NacosUseEndpointParsingRuleProperty")]
        public class NacosUseEndpointParsingRuleProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INacosUseEndpointParsingRuleProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(INewRatioProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.NewRatioProperty")]
        public interface INewRatioProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(INewRatioProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.NewRatioProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INewRatioProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.NewRatioProperty")]
        public class NewRatioProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INewRatioProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(INewSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.NewSizeProperty")]
        public interface INewSizeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(INewSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.NewSizeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INewSizeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.NewSizeProperty")]
        public class NewSizeProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.INewSizeProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IOldGarbageCollectorProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.OldGarbageCollectorProperty")]
        public interface IOldGarbageCollectorProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IOldGarbageCollectorProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.OldGarbageCollectorProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IOldGarbageCollectorProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.OldGarbageCollectorProperty")]
        public class OldGarbageCollectorProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IOldGarbageCollectorProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IParallelGCThreadsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ParallelGCThreadsProperty")]
        public interface IParallelGCThreadsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IParallelGCThreadsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ParallelGCThreadsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IParallelGCThreadsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.ParallelGCThreadsProperty")]
        public class ParallelGCThreadsProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IParallelGCThreadsProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IPermSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PermSizeProperty")]
        public interface IPermSizeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPermSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PermSizeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPermSizeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.PermSizeProperty")]
        public class PermSizeProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPermSizeProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IPostStartExecProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartExecProperty")]
        public interface IPostStartExecProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: command: undefined
            /// </remarks>
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Command
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPostStartExecProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartExecProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartExecProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: command: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Command
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartExecProperty")]
        public class PostStartExecProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartExecProperty
        {
            private object? _command;

            /// <remarks>
            /// <strong>Property</strong>: command: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Command
            {
                get => _command;
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
                    _command = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IPostStartHttpGetProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartHttpGetProperty")]
        public interface IPostStartHttpGetProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Host
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpHeaders: undefined
            /// </remarks>
            [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetHttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpHeaders
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: path: undefined
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Path
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: scheme: undefined
            /// </remarks>
            [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Scheme
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPostStartHttpGetProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartHttpGetProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartHttpGetProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: host: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Host
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpHeaders: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetHttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? HttpHeaders
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: path: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Path
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: scheme: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Scheme
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartHttpGetProperty")]
        public class PostStartHttpGetProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartHttpGetProperty
        {
            private object? _host;

            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Host
            {
                get => _host;
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
                    _host = value;
                }
            }

            private object? _httpHeaders;

            /// <remarks>
            /// <strong>Property</strong>: httpHeaders: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.HttpGetHttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HttpHeaders
            {
                get => _httpHeaders;
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
                                        case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpGetHttpHeadersProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpGetHttpHeadersProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IHttpGetHttpHeadersProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
                    _httpHeaders = value;
                }
            }

            private object? _path;

            /// <remarks>
            /// <strong>Property</strong>: path: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Path
            {
                get => _path;
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
                    _path = value;
                }
            }

            private object? _port;

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => _port;
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
                    _port = value;
                }
            }

            private object? _scheme;

            /// <remarks>
            /// <strong>Property</strong>: scheme: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scheme
            {
                get => _scheme;
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
                    _scheme = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IPostStartProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartProperty")]
        public interface IPostStartProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: exec: undefined
            /// </remarks>
            [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PostStartExecProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Exec
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGet: undefined
            /// </remarks>
            [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PostStartHttpGetProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpGet
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPostStartProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: exec: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PostStartExecProperty\"}]}}", isOptional: true)]
                public object? Exec
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpGet: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PostStartHttpGetProperty\"}]}}", isOptional: true)]
                public object? HttpGet
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.PostStartProperty")]
        public class PostStartProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartProperty
        {
            private object? _exec;

            /// <remarks>
            /// <strong>Property</strong>: exec: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PostStartExecProperty\"}]}}", isOptional: true)]
            public object? Exec
            {
                get => _exec;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartExecProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartExecProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _exec = value;
                }
            }

            private object? _httpGet;

            /// <remarks>
            /// <strong>Property</strong>: httpGet: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PostStartHttpGetProperty\"}]}}", isOptional: true)]
            public object? HttpGet
            {
                get => _httpGet;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartHttpGetProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPostStartHttpGetProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _httpGet = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IPreStopExecProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopExecProperty")]
        public interface IPreStopExecProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: command: undefined
            /// </remarks>
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Command
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPreStopExecProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopExecProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopExecProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: command: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Command
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopExecProperty")]
        public class PreStopExecProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopExecProperty
        {
            private object? _command;

            /// <remarks>
            /// <strong>Property</strong>: command: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Command
            {
                get => _command;
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
                    _command = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IPreStopHttpGetHttpHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetHttpHeadersProperty")]
        public interface IPreStopHttpGetHttpHeadersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: undefined
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Name
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPreStopHttpGetHttpHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetHttpHeadersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopHttpGetHttpHeadersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Name
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetHttpHeadersProperty")]
        public class PreStopHttpGetHttpHeadersProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopHttpGetHttpHeadersProperty
        {
            private object? _name;

            /// <remarks>
            /// <strong>Property</strong>: name: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => _name;
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
                    _name = value;
                }
            }

            private object? _value;

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get => _value;
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
                    _value = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IPreStopHttpGetProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetProperty")]
        public interface IPreStopHttpGetProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Host
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpHeaders: undefined
            /// </remarks>
            [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetHttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpHeaders
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: path: undefined
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Path
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: scheme: undefined
            /// </remarks>
            [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Scheme
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPreStopHttpGetProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopHttpGetProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: host: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Host
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpHeaders: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetHttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? HttpHeaders
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: path: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Path
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: scheme: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Scheme
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetProperty")]
        public class PreStopHttpGetProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopHttpGetProperty
        {
            private object? _host;

            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Host
            {
                get => _host;
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
                    _host = value;
                }
            }

            private object? _httpHeaders;

            /// <remarks>
            /// <strong>Property</strong>: httpHeaders: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetHttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HttpHeaders
            {
                get => _httpHeaders;
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
                                        case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopHttpGetHttpHeadersProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopHttpGetHttpHeadersProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopHttpGetHttpHeadersProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
                    _httpHeaders = value;
                }
            }

            private object? _path;

            /// <remarks>
            /// <strong>Property</strong>: path: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Path
            {
                get => _path;
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
                    _path = value;
                }
            }

            private object? _port;

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => _port;
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
                    _port = value;
                }
            }

            private object? _scheme;

            /// <remarks>
            /// <strong>Property</strong>: scheme: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scheme
            {
                get => _scheme;
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
                    _scheme = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IPreStopProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopProperty")]
        public interface IPreStopProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: exec: undefined
            /// </remarks>
            [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PreStopExecProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Exec
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGet: undefined
            /// </remarks>
            [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpGet
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPreStopProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: exec: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PreStopExecProperty\"}]}}", isOptional: true)]
                public object? Exec
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpGet: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetProperty\"}]}}", isOptional: true)]
                public object? HttpGet
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.PreStopProperty")]
        public class PreStopProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopProperty
        {
            private object? _exec;

            /// <remarks>
            /// <strong>Property</strong>: exec: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PreStopExecProperty\"}]}}", isOptional: true)]
            public object? Exec
            {
                get => _exec;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopExecProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopExecProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _exec = value;
                }
            }

            private object? _httpGet;

            /// <remarks>
            /// <strong>Property</strong>: httpGet: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PreStopHttpGetProperty\"}]}}", isOptional: true)]
            public object? HttpGet
            {
                get => _httpGet;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopHttpGetProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPreStopHttpGetProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _httpGet = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IPrintGCDateStampsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCDateStampsProperty")]
        public interface IPrintGCDateStampsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPrintGCDateStampsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCDateStampsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPrintGCDateStampsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCDateStampsProperty")]
        public class PrintGCDateStampsProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPrintGCDateStampsProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IPrintGCProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCProperty")]
        public interface IPrintGCProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPrintGCProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPrintGCProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.PrintGCProperty")]
        public class PrintGCProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IPrintGCProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IReadinessExecProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessExecProperty")]
        public interface IReadinessExecProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: command: undefined
            /// </remarks>
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Command
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IReadinessExecProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessExecProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessExecProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: command: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Command
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessExecProperty")]
        public class ReadinessExecProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessExecProperty
        {
            private object? _command;

            /// <remarks>
            /// <strong>Property</strong>: command: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Command
            {
                get => _command;
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
                    _command = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IReadinessHttpGetHttpHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetHttpHeadersProperty")]
        public interface IReadinessHttpGetHttpHeadersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: undefined
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Name
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IReadinessHttpGetHttpHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetHttpHeadersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessHttpGetHttpHeadersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Name
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetHttpHeadersProperty")]
        public class ReadinessHttpGetHttpHeadersProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessHttpGetHttpHeadersProperty
        {
            private object? _name;

            /// <remarks>
            /// <strong>Property</strong>: name: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => _name;
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
                    _name = value;
                }
            }

            private object? _value;

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get => _value;
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
                    _value = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IReadinessHttpGetProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetProperty")]
        public interface IReadinessHttpGetProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Host
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpHeaders: undefined
            /// </remarks>
            [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetHttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpHeaders
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: path: undefined
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Path
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: scheme: undefined
            /// </remarks>
            [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Scheme
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IReadinessHttpGetProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessHttpGetProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: host: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Host
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpHeaders: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetHttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? HttpHeaders
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: path: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Path
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: scheme: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Scheme
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetProperty")]
        public class ReadinessHttpGetProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessHttpGetProperty
        {
            private object? _host;

            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Host
            {
                get => _host;
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
                    _host = value;
                }
            }

            private object? _httpHeaders;

            /// <remarks>
            /// <strong>Property</strong>: httpHeaders: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetHttpHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HttpHeaders
            {
                get => _httpHeaders;
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
                                        case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessHttpGetHttpHeadersProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessHttpGetHttpHeadersProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessHttpGetHttpHeadersProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
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
                    _httpHeaders = value;
                }
            }

            private object? _path;

            /// <remarks>
            /// <strong>Property</strong>: path: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Path
            {
                get => _path;
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
                    _path = value;
                }
            }

            private object? _port;

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => _port;
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
                    _port = value;
                }
            }

            private object? _scheme;

            /// <remarks>
            /// <strong>Property</strong>: scheme: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scheme
            {
                get => _scheme;
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
                    _scheme = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IReadinessProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessProperty")]
        public interface IReadinessProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: exec: undefined
            /// </remarks>
            [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessExecProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Exec
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: failureThreshold: undefined
            /// </remarks>
            [JsiiProperty(name: "failureThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FailureThreshold
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpGet: undefined
            /// </remarks>
            [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpGet
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: initialDelaySeconds: undefined
            /// </remarks>
            [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InitialDelaySeconds
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: periodSeconds: undefined
            /// </remarks>
            [JsiiProperty(name: "periodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PeriodSeconds
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: successThreshold: undefined
            /// </remarks>
            [JsiiProperty(name: "successThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SuccessThreshold
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tcpSocket: undefined
            /// </remarks>
            [JsiiProperty(name: "tcpSocket", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessTcpSocketProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TcpSocket
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: timeoutSeconds: undefined
            /// </remarks>
            [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TimeoutSeconds
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IReadinessProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: exec: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessExecProperty\"}]}}", isOptional: true)]
                public object? Exec
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: failureThreshold: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "failureThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FailureThreshold
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpGet: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetProperty\"}]}}", isOptional: true)]
                public object? HttpGet
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: initialDelaySeconds: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InitialDelaySeconds
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: periodSeconds: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "periodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PeriodSeconds
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: successThreshold: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "successThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SuccessThreshold
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tcpSocket: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tcpSocket", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessTcpSocketProperty\"}]}}", isOptional: true)]
                public object? TcpSocket
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: timeoutSeconds: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TimeoutSeconds
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessProperty")]
        public class ReadinessProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessProperty
        {
            private object? _exec;

            /// <remarks>
            /// <strong>Property</strong>: exec: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessExecProperty\"}]}}", isOptional: true)]
            public object? Exec
            {
                get => _exec;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessExecProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessExecProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _exec = value;
                }
            }

            private object? _failureThreshold;

            /// <remarks>
            /// <strong>Property</strong>: failureThreshold: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failureThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailureThreshold
            {
                get => _failureThreshold;
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
                    _failureThreshold = value;
                }
            }

            private object? _httpGet;

            /// <remarks>
            /// <strong>Property</strong>: httpGet: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpGet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessHttpGetProperty\"}]}}", isOptional: true)]
            public object? HttpGet
            {
                get => _httpGet;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessHttpGetProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessHttpGetProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _httpGet = value;
                }
            }

            private object? _initialDelaySeconds;

            /// <remarks>
            /// <strong>Property</strong>: initialDelaySeconds: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "initialDelaySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InitialDelaySeconds
            {
                get => _initialDelaySeconds;
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
                    _initialDelaySeconds = value;
                }
            }

            private object? _periodSeconds;

            /// <remarks>
            /// <strong>Property</strong>: periodSeconds: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodSeconds
            {
                get => _periodSeconds;
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
                    _periodSeconds = value;
                }
            }

            private object? _successThreshold;

            /// <remarks>
            /// <strong>Property</strong>: successThreshold: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "successThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SuccessThreshold
            {
                get => _successThreshold;
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
                    _successThreshold = value;
                }
            }

            private object? _tcpSocket;

            /// <remarks>
            /// <strong>Property</strong>: tcpSocket: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tcpSocket", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessTcpSocketProperty\"}]}}", isOptional: true)]
            public object? TcpSocket
            {
                get => _tcpSocket;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessTcpSocketProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessTcpSocketProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _tcpSocket = value;
                }
            }

            private object? _timeoutSeconds;

            /// <remarks>
            /// <strong>Property</strong>: timeoutSeconds: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeoutSeconds
            {
                get => _timeoutSeconds;
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
                    _timeoutSeconds = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IReadinessTcpSocketProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessTcpSocketProperty")]
        public interface IReadinessTcpSocketProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Host
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IReadinessTcpSocketProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessTcpSocketProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessTcpSocketProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: host: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Host
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessTcpSocketProperty")]
        public class ReadinessTcpSocketProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IReadinessTcpSocketProperty
        {
            private object? _host;

            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Host
            {
                get => _host;
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
                    _host = value;
                }
            }

            private object? _port;

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => _port;
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
                    _port = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ISlsConfigsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.SlsConfigsProperty")]
        public interface ISlsConfigsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: logDir: If the standard output type is used, the collection path is stdout.log. If the file type is used, the collection path is the path of the collected file. Wildcards(*) are supported. The collection path must match the following regular expression:
            /// ^/( +)/(. *)^/$.
            /// </remarks>
            [JsiiProperty(name: "logDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? LogDir
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: logstore: The name of the Logstore. Make sure that the name of the Logstore is unique in the cluster. The name must comply with the following rules:
            /// The name can contain only lowercase letters, digits, hyphens (-), and underscores(_). The name must start and end with a lowercase letter or a digit. The name must be 3 to 63 characters in length.
            /// If this parameter is empty, the system automatically generates a name.
            /// </remarks>
            [JsiiProperty(name: "logstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Logstore
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The collection type. The file type is file and the standard output type is stdout.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Type
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISlsConfigsProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.SlsConfigsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ISlsConfigsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: logDir: If the standard output type is used, the collection path is stdout.log. If the file type is used, the collection path is the path of the collected file. Wildcards(*) are supported. The collection path must match the following regular expression:
                /// ^/( +)/(. *)^/$.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "logDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? LogDir
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: logstore: The name of the Logstore. Make sure that the name of the Logstore is unique in the cluster. The name must comply with the following rules:
                /// The name can contain only lowercase letters, digits, hyphens (-), and underscores(_). The name must start and end with a lowercase letter or a digit. The name must be 3 to 63 characters in length.
                /// If this parameter is empty, the system automatically generates a name.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "logstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Logstore
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The collection type. The file type is file and the standard output type is stdout.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Type
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.SlsConfigsProperty")]
        public class SlsConfigsProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ISlsConfigsProperty
        {
            private object? _logDir;

            /// <remarks>
            /// <strong>Property</strong>: logDir: If the standard output type is used, the collection path is stdout.log. If the file type is used, the collection path is the path of the collected file. Wildcards(*) are supported. The collection path must match the following regular expression:
            /// ^/( +)/(. *)^/$.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogDir
            {
                get => _logDir;
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
                    _logDir = value;
                }
            }

            private object? _logstore;

            /// <remarks>
            /// <strong>Property</strong>: logstore: The name of the Logstore. Make sure that the name of the Logstore is unique in the cluster. The name must comply with the following rules:
            /// The name can contain only lowercase letters, digits, hyphens (-), and underscores(_). The name must start and end with a lowercase letter or a digit. The name must be 3 to 63 characters in length.
            /// If this parameter is empty, the system automatically generates a name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Logstore
            {
                get => _logstore;
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
                    _logstore = value;
                }
            }

            private object? _type;

            /// <remarks>
            /// <strong>Property</strong>: type: The collection type. The file type is file and the standard output type is stdout.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
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
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _type = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ISurvivorRatioProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.SurvivorRatioProperty")]
        public interface ISurvivorRatioProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISurvivorRatioProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.SurvivorRatioProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ISurvivorRatioProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.SurvivorRatioProperty")]
        public class SurvivorRatioProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ISurvivorRatioProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ITcpSocketProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.TcpSocketProperty")]
        public interface ITcpSocketProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Host
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITcpSocketProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.TcpSocketProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ITcpSocketProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: host: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Host
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.TcpSocketProperty")]
        public class TcpSocketProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.ITcpSocketProperty
        {
            private object? _host;

            /// <remarks>
            /// <strong>Property</strong>: host: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Host
            {
                get => _host;
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
                    _host = value;
                }
            }

            private object? _port;

            /// <remarks>
            /// <strong>Property</strong>: port: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => _port;
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
                    _port = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IThreadStackSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ThreadStackSizeProperty")]
        public interface IThreadStackSizeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IThreadStackSizeProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.ThreadStackSizeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IThreadStackSizeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.ThreadStackSizeProperty")]
        public class ThreadStackSizeProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IThreadStackSizeProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IUseGCLogFileRotationProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.UseGCLogFileRotationProperty")]
        public interface IUseGCLogFileRotationProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IUseGCLogFileRotationProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.UseGCLogFileRotationProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IUseGCLogFileRotationProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.UseGCLogFileRotationProperty")]
        public class UseGCLogFileRotationProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IUseGCLogFileRotationProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IWebContainerConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.WebContainerConfigProperty")]
        public interface IWebContainerConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: contextInputType: Specifies whether to customize the access path for the application. Valid values:
            /// war: The application access path is the name of the WAR package. You do not need to enter a custom path.
            /// root: The application access path is /. You do not need to enter a custom path.
            /// custom: If you select this option, you must set contextPath to a custom path.
            /// </remarks>
            [JsiiProperty(name: "contextInputType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ContextInputType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: contextPath: The custom path. This parameter is required only when the ContextInputType parameter is set to custom.
            /// </remarks>
            [JsiiProperty(name: "contextPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ContextPath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpPort: The port range is from 1024 to 65535. The admin permission is configured for the container, but the root permission is required to perform operations on ports with numbers less than 1024. Therefore, enter a value greater than 1024 within the range. If you do not specify this parameter, 8080 is the default value.
            /// </remarks>
            [JsiiProperty(name: "httpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpPort
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxThreads: The number of connections in the connection pool. Default value: 400.
            /// Note This parameter greatly affects the application performance. We recommend that you set this parameter under professional guidance.
            /// </remarks>
            [JsiiProperty(name: "maxThreads", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MaxThreads
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: serverXml: serverXml: The content of the server.xml file customized in advanced configurations.
            /// This parameter takes effect only when UseAdvancedServerXml is set to true.
            /// </remarks>
            [JsiiProperty(name: "serverXml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ServerXml
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: uriEncoding: The encoding format for Tomcat. Valid values: UTF-8, ISO-8859-1, GBK, and GB2312. If you do not specify this parameter, ISO-8859-1 is the default value.
            /// </remarks>
            [JsiiProperty(name: "uriEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UriEncoding
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: useAdvancedServerXml: Specifies whether to use advanced configurations to customize the server.xml file. When the preceding parameter type and specific parameters cannot meet your requirements, you can use advanced configurations to edit the server.xml file of Tomcat.
            /// </remarks>
            [JsiiProperty(name: "useAdvancedServerXml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UseAdvancedServerXml
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: useBodyEncoding: Specifies whether to use BodyEncoding for URL.
            /// </remarks>
            [JsiiProperty(name: "useBodyEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UseBodyEncoding
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: useDefaultConfig: Specifies whether to use the custom configuration. The value true indicates that the custom configuration is not used, whereas the value false indicates that the custom configuration is used. If the custom configuration is not used, the following parameters do not take effect.
            /// </remarks>
            [JsiiProperty(name: "useDefaultConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UseDefaultConfig
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IWebContainerConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.WebContainerConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IWebContainerConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: contextInputType: Specifies whether to customize the access path for the application. Valid values:
                /// war: The application access path is the name of the WAR package. You do not need to enter a custom path.
                /// root: The application access path is /. You do not need to enter a custom path.
                /// custom: If you select this option, you must set contextPath to a custom path.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "contextInputType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ContextInputType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: contextPath: The custom path. This parameter is required only when the ContextInputType parameter is set to custom.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "contextPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ContextPath
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpPort: The port range is from 1024 to 65535. The admin permission is configured for the container, but the root permission is required to perform operations on ports with numbers less than 1024. Therefore, enter a value greater than 1024 within the range. If you do not specify this parameter, 8080 is the default value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HttpPort
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxThreads: The number of connections in the connection pool. Default value: 400.
                /// Note This parameter greatly affects the application performance. We recommend that you set this parameter under professional guidance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxThreads", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MaxThreads
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: serverXml: serverXml: The content of the server.xml file customized in advanced configurations.
                /// This parameter takes effect only when UseAdvancedServerXml is set to true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serverXml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ServerXml
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: uriEncoding: The encoding format for Tomcat. Valid values: UTF-8, ISO-8859-1, GBK, and GB2312. If you do not specify this parameter, ISO-8859-1 is the default value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "uriEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? UriEncoding
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: useAdvancedServerXml: Specifies whether to use advanced configurations to customize the server.xml file. When the preceding parameter type and specific parameters cannot meet your requirements, you can use advanced configurations to edit the server.xml file of Tomcat.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "useAdvancedServerXml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? UseAdvancedServerXml
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: useBodyEncoding: Specifies whether to use BodyEncoding for URL.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "useBodyEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? UseBodyEncoding
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: useDefaultConfig: Specifies whether to use the custom configuration. The value true indicates that the custom configuration is not used, whereas the value false indicates that the custom configuration is used. If the custom configuration is not used, the following parameters do not take effect.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "useDefaultConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? UseDefaultConfig
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.WebContainerConfigProperty")]
        public class WebContainerConfigProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IWebContainerConfigProperty
        {
            private object? _contextInputType;

            /// <remarks>
            /// <strong>Property</strong>: contextInputType: Specifies whether to customize the access path for the application. Valid values:
            /// war: The application access path is the name of the WAR package. You do not need to enter a custom path.
            /// root: The application access path is /. You do not need to enter a custom path.
            /// custom: If you select this option, you must set contextPath to a custom path.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contextInputType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContextInputType
            {
                get => _contextInputType;
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
                    _contextInputType = value;
                }
            }

            private object? _contextPath;

            /// <remarks>
            /// <strong>Property</strong>: contextPath: The custom path. This parameter is required only when the ContextInputType parameter is set to custom.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contextPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContextPath
            {
                get => _contextPath;
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
                    _contextPath = value;
                }
            }

            private object? _httpPort;

            /// <remarks>
            /// <strong>Property</strong>: httpPort: The port range is from 1024 to 65535. The admin permission is configured for the container, but the root permission is required to perform operations on ports with numbers less than 1024. Therefore, enter a value greater than 1024 within the range. If you do not specify this parameter, 8080 is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpPort
            {
                get => _httpPort;
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
                    _httpPort = value;
                }
            }

            private object? _maxThreads;

            /// <remarks>
            /// <strong>Property</strong>: maxThreads: The number of connections in the connection pool. Default value: 400.
            /// Note This parameter greatly affects the application performance. We recommend that you set this parameter under professional guidance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxThreads", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxThreads
            {
                get => _maxThreads;
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
                    _maxThreads = value;
                }
            }

            private object? _serverXml;

            /// <remarks>
            /// <strong>Property</strong>: serverXml: serverXml: The content of the server.xml file customized in advanced configurations.
            /// This parameter takes effect only when UseAdvancedServerXml is set to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverXml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServerXml
            {
                get => _serverXml;
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
                    _serverXml = value;
                }
            }

            private object? _uriEncoding;

            /// <remarks>
            /// <strong>Property</strong>: uriEncoding: The encoding format for Tomcat. Valid values: UTF-8, ISO-8859-1, GBK, and GB2312. If you do not specify this parameter, ISO-8859-1 is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "uriEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UriEncoding
            {
                get => _uriEncoding;
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
                    _uriEncoding = value;
                }
            }

            private object? _useAdvancedServerXml;

            /// <remarks>
            /// <strong>Property</strong>: useAdvancedServerXml: Specifies whether to use advanced configurations to customize the server.xml file. When the preceding parameter type and specific parameters cannot meet your requirements, you can use advanced configurations to edit the server.xml file of Tomcat.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "useAdvancedServerXml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UseAdvancedServerXml
            {
                get => _useAdvancedServerXml;
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
                    _useAdvancedServerXml = value;
                }
            }

            private object? _useBodyEncoding;

            /// <remarks>
            /// <strong>Property</strong>: useBodyEncoding: Specifies whether to use BodyEncoding for URL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "useBodyEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UseBodyEncoding
            {
                get => _useBodyEncoding;
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
                    _useBodyEncoding = value;
                }
            }

            private object? _useDefaultConfig;

            /// <remarks>
            /// <strong>Property</strong>: useDefaultConfig: Specifies whether to use the custom configuration. The value true indicates that the custom configuration is not used, whereas the value false indicates that the custom configuration is used. If the custom configuration is not used, the following parameters do not take effect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "useDefaultConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UseDefaultConfig
            {
                get => _useDefaultConfig;
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
                    _useDefaultConfig = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IYoungGarbageCollectorProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.YoungGarbageCollectorProperty")]
        public interface IYoungGarbageCollectorProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Original
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Startup
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IYoungGarbageCollectorProperty), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sApplication.YoungGarbageCollectorProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IYoungGarbageCollectorProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: original: Indicates the configuration value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Original
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: startup: Indicates a startup parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Startup
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplication.YoungGarbageCollectorProperty")]
        public class YoungGarbageCollectorProperty : AlibabaCloud.SDK.ROS.CDK.Edas.RosK8sApplication.IYoungGarbageCollectorProperty
        {
            private object? _original;

            /// <remarks>
            /// <strong>Property</strong>: original: Indicates the configuration value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "original", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Original
            {
                get => _original;
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
                    _original = value;
                }
            }

            private object? _startup;

            /// <remarks>
            /// <strong>Property</strong>: startup: Indicates a startup parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Startup
            {
                get => _startup;
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
                    _startup = value;
                }
            }
        }
    }
}
