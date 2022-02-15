using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>A ROS template type:  `ALIYUN::FC::Service`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Fc.RosService), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-fc.RosServiceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosService : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::FC::Service`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosService(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Fc.IRosServiceProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosService(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosService(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Fc.RosService))!;

        /// <remarks>
        /// <strong>Attribute</strong>: InternetAccess: Whether enable Internet access
        /// </remarks>
        [JsiiProperty(name: "attrInternetAccess", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrInternetAccess
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LogProject: Log project of service
        /// </remarks>
        [JsiiProperty(name: "attrLogProject", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLogProject
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Logstore: Log store of service
        /// </remarks>
        [JsiiProperty(name: "attrLogstore", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLogstore
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Role: Role of service
        /// </remarks>
        [JsiiProperty(name: "attrRole", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRole
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ServiceId: The service ID
        /// </remarks>
        [JsiiProperty(name: "attrServiceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrServiceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ServiceName: The service name
        /// </remarks>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrServiceName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Tags: Tags of service
        /// </remarks>
        [JsiiProperty(name: "attrTags", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VpcId: VPC ID
        /// </remarks>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVpcId
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
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ServiceName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeletionForce
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Service description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Description
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: internetAccess: Set it to true to enable Internet access.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InternetAccess
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.LogConfigProperty\"}]}}", isOptional: true)]
        public virtual object? LogConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nasConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.NasConfigProperty\"}]}}", isOptional: true)]
        public virtual object? NasConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Role
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ITagsProperty[]? Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ITagsProperty[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tracingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.TracingConfigProperty\"}]}}", isOptional: true)]
        public virtual object? TracingConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.VpcConfigProperty\"}]}}", isOptional: true)]
        public virtual object? VpcConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ILogConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.LogConfigProperty")]
        public interface ILogConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: enableRequestMetrics: Specifies whether to enable the request-level metrics. If you enable this feature, you can view the time and memory that are consumed for a specific invocation of each function in the service. Valid values:
            /// false: disables request-level metrics.
            /// true: enables request-level metrics. Default value: true.
            /// </remarks>
            [JsiiProperty(name: "enableRequestMetrics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EnableRequestMetrics
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: logBeginRule: The log rotation rule. Log are split based on the rule. The log blocks obtained after the splitting are written to Log Service. Valid values:
            /// None: disables the log splitting rule. This is the default value.
            /// DefaultRegex: sets the log splitting rule to the default regular expression. If you set this parameter to DefaultRegex, logs are split based on the data in a log. For example, the line that contains 2021-10-10 in the log is considered as the first line of a log block. The first line and the following consecutive lines that do not contain dates in the log are written to Log Service as a whole.
            /// </remarks>
            [JsiiProperty(name: "logBeginRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? LogBeginRule
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: logstore: The log store name of Logs service
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
            /// <strong>Property</strong>: project: The project name of Logs service
            /// </remarks>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Project
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ILogConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.LogConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ILogConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: enableRequestMetrics: Specifies whether to enable the request-level metrics. If you enable this feature, you can view the time and memory that are consumed for a specific invocation of each function in the service. Valid values:
                /// false: disables request-level metrics.
                /// true: enables request-level metrics. Default value: true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enableRequestMetrics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EnableRequestMetrics
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: logBeginRule: The log rotation rule. Log are split based on the rule. The log blocks obtained after the splitting are written to Log Service. Valid values:
                /// None: disables the log splitting rule. This is the default value.
                /// DefaultRegex: sets the log splitting rule to the default regular expression. If you set this parameter to DefaultRegex, logs are split based on the data in a log. For example, the line that contains 2021-10-10 in the log is considered as the first line of a log block. The first line and the following consecutive lines that do not contain dates in the log are written to Log Service as a whole.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "logBeginRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? LogBeginRule
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: logstore: The log store name of Logs service
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "logstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Logstore
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: project: The project name of Logs service
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Project
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosService.LogConfigProperty")]
        public class LogConfigProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ILogConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: enableRequestMetrics: Specifies whether to enable the request-level metrics. If you enable this feature, you can view the time and memory that are consumed for a specific invocation of each function in the service. Valid values:
            /// false: disables request-level metrics.
            /// true: enables request-level metrics. Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableRequestMetrics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableRequestMetrics
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: logBeginRule: The log rotation rule. Log are split based on the rule. The log blocks obtained after the splitting are written to Log Service. Valid values:
            /// None: disables the log splitting rule. This is the default value.
            /// DefaultRegex: sets the log splitting rule to the default regular expression. If you set this parameter to DefaultRegex, logs are split based on the data in a log. For example, the line that contains 2021-10-10 in the log is considered as the first line of a log block. The first line and the following consecutive lines that do not contain dates in the log are written to Log Service as a whole.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logBeginRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogBeginRule
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: logstore: The log store name of Logs service
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Logstore
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: project: The project name of Logs service
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Project
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IMountPointsProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.MountPointsProperty")]
        public interface IMountPointsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: mountDir: A local mount point.
            /// </remarks>
            [JsiiProperty(name: "mountDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object MountDir
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverAddr: The address of NAS instance.
            /// </remarks>
            [JsiiProperty(name: "serverAddr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ServerAddr
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IMountPointsProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.MountPointsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosService.IMountPointsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: mountDir: A local mount point.
                /// </remarks>
                [JsiiProperty(name: "mountDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object MountDir
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: serverAddr: The address of NAS instance.
                /// </remarks>
                [JsiiProperty(name: "serverAddr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ServerAddr
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosService.MountPointsProperty")]
        public class MountPointsProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosService.IMountPointsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: mountDir: A local mount point.
            /// </remarks>
            [JsiiProperty(name: "mountDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MountDir
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverAddr: The address of NAS instance.
            /// </remarks>
            [JsiiProperty(name: "serverAddr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerAddr
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(INasConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.NasConfigProperty")]
        public interface INasConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: groupId: Group ID
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object GroupId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: mountPoints: Mount points
            /// </remarks>
            [JsiiProperty(name: "mountPoints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.MountPointsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object MountPoints
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: userId: User ID
            /// </remarks>
            [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object UserId
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(INasConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.NasConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosService.INasConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: groupId: Group ID
                /// </remarks>
                [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object GroupId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: mountPoints: Mount points
                /// </remarks>
                [JsiiProperty(name: "mountPoints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.MountPointsProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object MountPoints
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: userId: User ID
                /// </remarks>
                [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object UserId
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosService.NasConfigProperty")]
        public class NasConfigProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosService.INasConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: groupId: Group ID
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: mountPoints: Mount points
            /// </remarks>
            [JsiiProperty(name: "mountPoints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.MountPointsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object MountPoints
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userId: User ID
            /// </remarks>
            [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.TagsProperty")]
        public interface ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
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

            [JsiiTypeProxy(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.TagsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ITagsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: undefined
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
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
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosService.TagsProperty")]
        public class TagsProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITracingConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.TracingConfigProperty")]
        public interface ITracingConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: params: The tracing analysis parameters.
            /// </remarks>
            [JsiiProperty(name: "params", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Params
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the tracing analysis system.
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

            [JsiiTypeProxy(nativeType: typeof(ITracingConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.TracingConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ITracingConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: params: The tracing analysis parameters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "params", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? Params
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The type of the tracing analysis system.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Type
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosService.TracingConfigProperty")]
        public class TracingConfigProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ITracingConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: params: The tracing analysis parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "params", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Params
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the tracing analysis system.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IVpcConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.VpcConfigProperty")]
        public interface IVpcConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: Security group ID
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object SecurityGroupId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: VPC ID
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object VpcId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchIds: List of VSwitch IDs
            /// </remarks>
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object VSwitchIds
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IVpcConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosService.VpcConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosService.IVpcConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: securityGroupId: Security group ID
                /// </remarks>
                [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object SecurityGroupId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: vpcId: VPC ID
                /// </remarks>
                [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object VpcId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: vSwitchIds: List of VSwitch IDs
                /// </remarks>
                [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object VSwitchIds
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosService.VpcConfigProperty")]
        public class VpcConfigProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosService.IVpcConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: Security group ID
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: VPC ID
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchIds: List of VSwitch IDs
            /// </remarks>
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchIds
            {
                get;
                set;
            }
        }
    }
}
