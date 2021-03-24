using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>A ROS template type:  `ALIYUN::FC::CustomDomain`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Fc.RosCustomDomain), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosCustomDomain", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomainProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosCustomDomain : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::FC::CustomDomain`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosCustomDomain(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Fc.IRosCustomDomainProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCustomDomain(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCustomDomain(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Fc.RosCustomDomain))!;

        /// <remarks>
        /// <strong>Attribute</strong>: Domain: The domain with protocol.
        /// </remarks>
        [JsiiProperty(name: "attrDomain", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DomainName: The domain name
        /// </remarks>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDomainName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: domainName: domain name
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DomainName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: HTTP or HTTP,HTTPS
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Protocol
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: apiVersion: api version
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "apiVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ApiVersion
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: certConfig: certificate info
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty\"}]}}", isOptional: true)]
        public virtual object? CertConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "routeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty\"}]}}", isOptional: true)]
        public virtual object? RouteConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ICertConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty")]
        public interface ICertConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: certificate: certificate
            /// </remarks>
            [JsiiProperty(name: "certificate", typeJson: "{\"primitive\":\"string\"}")]
            string Certificate
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: certName: custom certificate name
            /// </remarks>
            [JsiiProperty(name: "certName", typeJson: "{\"primitive\":\"string\"}")]
            string CertName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: privateKey: private key
            /// </remarks>
            [JsiiProperty(name: "privateKey", typeJson: "{\"primitive\":\"string\"}")]
            string PrivateKey
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ICertConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosCustomDomain.ICertConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: certificate: certificate
                /// </remarks>
                [JsiiProperty(name: "certificate", typeJson: "{\"primitive\":\"string\"}")]
                public string Certificate
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: certName: custom certificate name
                /// </remarks>
                [JsiiProperty(name: "certName", typeJson: "{\"primitive\":\"string\"}")]
                public string CertName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: privateKey: private key
                /// </remarks>
                [JsiiProperty(name: "privateKey", typeJson: "{\"primitive\":\"string\"}")]
                public string PrivateKey
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty")]
        public class CertConfigProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosCustomDomain.ICertConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: certificate: certificate
            /// </remarks>
            [JsiiProperty(name: "certificate", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Certificate
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: certName: custom certificate name
            /// </remarks>
            [JsiiProperty(name: "certName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string CertName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: privateKey: private key
            /// </remarks>
            [JsiiProperty(name: "privateKey", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string PrivateKey
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IRouteConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty")]
        public interface IRouteConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: routes: PathConfig Array
            /// </remarks>
            [JsiiProperty(name: "routes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.RoutesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object Routes
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IRouteConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosCustomDomain.IRouteConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: routes: PathConfig Array
                /// </remarks>
                [JsiiProperty(name: "routes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.RoutesProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object Routes
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty")]
        public class RouteConfigProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosCustomDomain.IRouteConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: routes: PathConfig Array
            /// </remarks>
            [JsiiProperty(name: "routes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.RoutesProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
            public object Routes
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IRoutesProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosCustomDomain.RoutesProperty")]
        public interface IRoutesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: functionName: Path to the function, for example: "login"
            /// </remarks>
            [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
            string FunctionName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: path: HTTP request path when a function is called with a custom domain name, for example: "/login/*"
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
            string Path
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Path to the service, for example: "blogService"
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            string ServiceName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: qualifier: Service version or alias
            /// </remarks>
            [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Qualifier
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRoutesProperty), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosCustomDomain.RoutesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.RosCustomDomain.IRoutesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: functionName: Path to the function, for example: "login"
                /// </remarks>
                [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
                public string FunctionName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: path: HTTP request path when a function is called with a custom domain name, for example: "/login/*"
                /// </remarks>
                [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
                public string Path
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceName: Path to the service, for example: "blogService"
                /// </remarks>
                [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
                public string ServiceName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: qualifier: Service version or alias
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Qualifier
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosCustomDomain.RoutesProperty")]
        public class RoutesProperty : AlibabaCloud.SDK.ROS.CDK.Fc.RosCustomDomain.IRoutesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: functionName: Path to the function, for example: "login"
            /// </remarks>
            [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string FunctionName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: path: HTTP request path when a function is called with a custom domain name, for example: "/login/*"
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Path
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Path to the service, for example: "blogService"
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ServiceName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: qualifier: Service version or alias
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Qualifier
            {
                get;
                set;
            }
        }
    }
}
