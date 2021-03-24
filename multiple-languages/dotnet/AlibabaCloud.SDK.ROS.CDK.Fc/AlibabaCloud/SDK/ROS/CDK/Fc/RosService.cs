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

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
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
        [JsiiProperty(name: "attrInternetAccess", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetAccess
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LogProject: Log project of service
        /// </remarks>
        [JsiiProperty(name: "attrLogProject", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLogProject
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Logstore: Log store of service
        /// </remarks>
        [JsiiProperty(name: "attrLogstore", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLogstore
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Role: Role of service
        /// </remarks>
        [JsiiProperty(name: "attrRole", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRole
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ServiceId: The service ID
        /// </remarks>
        [JsiiProperty(name: "attrServiceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrServiceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ServiceName: The service name
        /// </remarks>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrServiceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Tags: Tags of service
        /// </remarks>
        [JsiiProperty(name: "attrTags", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VpcId: VPC ID
        /// </remarks>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TagManager\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.TagManager Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.TagManager>()!;
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
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ServiceName
        {
            get => GetInstanceProperty<string>()!;
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
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Description
        {
            get => GetInstanceProperty<string?>();
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
        [JsiiProperty(name: "role", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Role
        {
            get => GetInstanceProperty<string?>();
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
            /// <strong>Property</strong>: enableRequestMetrics: Whether enable request metrics.
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
            /// <strong>Property</strong>: logstore: The log store name of Logs service
            /// </remarks>
            [JsiiProperty(name: "logstore", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Logstore
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: project: The project name of Logs service
            /// </remarks>
            [JsiiProperty(name: "project", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Project
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
                /// <strong>Property</strong>: enableRequestMetrics: Whether enable request metrics.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enableRequestMetrics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EnableRequestMetrics
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: logstore: The log store name of Logs service
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "logstore", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Logstore
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: project: The project name of Logs service
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "project", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Project
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosService.LogConfigProperty")]
        public class LogConfigProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ILogConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: enableRequestMetrics: Whether enable request metrics.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableRequestMetrics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? EnableRequestMetrics
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: logstore: The log store name of Logs service
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logstore", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Logstore
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: project: The project name of Logs service
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "project", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Project
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
            [JsiiProperty(name: "mountDir", typeJson: "{\"primitive\":\"string\"}")]
            string MountDir
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverAddr: The address of NAS instance.
            /// </remarks>
            [JsiiProperty(name: "serverAddr", typeJson: "{\"primitive\":\"string\"}")]
            string ServerAddr
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
                [JsiiProperty(name: "mountDir", typeJson: "{\"primitive\":\"string\"}")]
                public string MountDir
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: serverAddr: The address of NAS instance.
                /// </remarks>
                [JsiiProperty(name: "serverAddr", typeJson: "{\"primitive\":\"string\"}")]
                public string ServerAddr
                {
                    get => GetInstanceProperty<string>()!;
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
            [JsiiProperty(name: "mountDir", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string MountDir
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverAddr: The address of NAS instance.
            /// </remarks>
            [JsiiProperty(name: "serverAddr", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ServerAddr
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
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"number\"}")]
            double GroupId
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
            [JsiiProperty(name: "userId", typeJson: "{\"primitive\":\"number\"}")]
            double UserId
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
                [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"number\"}")]
                public double GroupId
                {
                    get => GetInstanceProperty<double>()!;
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
                [JsiiProperty(name: "userId", typeJson: "{\"primitive\":\"number\"}")]
                public double UserId
                {
                    get => GetInstanceProperty<double>()!;
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
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double GroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: mountPoints: Mount points
            /// </remarks>
            [JsiiProperty(name: "mountPoints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.MountPointsProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
            public object MountPoints
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userId: User ID
            /// </remarks>
            [JsiiProperty(name: "userId", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double UserId
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
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Type
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
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Type
                {
                    get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "params", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
            public object? Params
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the tracing analysis system.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Type
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
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}")]
            string SecurityGroupId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: VPC ID
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
            string VpcId
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
                [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}")]
                public string SecurityGroupId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: vpcId: VPC ID
                /// </remarks>
                [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
                public string VpcId
                {
                    get => GetInstanceProperty<string>()!;
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
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string SecurityGroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: VPC ID
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string VpcId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchIds: List of VSwitch IDs
            /// </remarks>
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object VSwitchIds
            {
                get;
                set;
            }
        }
    }
}
