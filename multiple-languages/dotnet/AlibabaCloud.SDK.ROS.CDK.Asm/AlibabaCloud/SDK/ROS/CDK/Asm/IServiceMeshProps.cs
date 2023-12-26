using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Asm
{
    /// <summary>Properties for defining a `ServiceMesh`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IServiceMeshProps), fullyQualifiedName: "@alicloud/ros-cdk-asm.ServiceMeshProps")]
    public interface IServiceMeshProps
    {
        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].</summary>
        [JsiiProperty(name: "vSwitches", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitches
        {
            get;
        }

        /// <summary>Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.</summary>
        /// <remarks>
        /// Valid values: true and false. Default value: false.
        /// If you do not set this parameter, the API server of clusters added to the ASM instance
        /// cannot be accessed from the Internet.
        /// </remarks>
        [JsiiProperty(name: "apiServerPublicEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApiServerPublicEip
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property auditProject: The name of the Log Service project that is used for mesh audit.</summary>
        /// <remarks>
        /// Default value: mesh-log-{meshId}.
        /// </remarks>
        [JsiiProperty(name: "auditProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuditProject
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customizedZipkin: Specifies whether to use a user-created Zipkin system.</summary>
        [JsiiProperty(name: "customizedZipkin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomizedZipkin
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAudit: Specifies whether to enable the mesh audit feature.</summary>
        /// <remarks>
        /// To enable this feature, make sure
        /// that you have activated Alibaba Cloud Log Service.
        /// Valid values: true and false. Default value: false.
        /// </remarks>
        [JsiiProperty(name: "enableAudit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAudit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.</summary>
        [JsiiProperty(name: "includeIpRanges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IncludeIpRanges
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property istioVersion: The Istio version of the ASM instance.</summary>
        [JsiiProperty(name: "istioVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IstioVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.</summary>
        /// <remarks>
        /// Valid values: true and false. Default value: false.
        /// </remarks>
        [JsiiProperty(name: "localityLoadBalancing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LocalityLoadBalancing
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the ASM instance.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property opa: OPA settings.</summary>
        [JsiiProperty(name: "opa", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Opa
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.</summary>
        [JsiiProperty(name: "outboundTrafficPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OutboundTrafficPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.</summary>
        /// <remarks>
        /// Valid values: true and false. Default value: false.
        /// If you do not set this parameter, only clusters in the same VPC as the ASM instance
        /// can access Istio Pilot of the instance.
        /// </remarks>
        [JsiiProperty(name: "pilotPublicEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PilotPublicEip
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxy: Proxy settings.</summary>
        [JsiiProperty(name: "proxy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Proxy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property telemetry: Specifies whether to enable Prometheus monitoring.</summary>
        /// <remarks>
        /// We recommend that you use Application Real-Time Monitoring Service (ARMS).
        /// </remarks>
        [JsiiProperty(name: "telemetry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Telemetry
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property traceSampling: The sampling percentage of tracing.</summary>
        [JsiiProperty(name: "traceSampling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TraceSampling
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tracing: Specifies whether to enable the tracing feature.</summary>
        /// <remarks>
        /// To enable this feature, make sure
        /// that you have activated Alibaba Cloud Tracing Analysis.
        /// Valid values: true and false. Default value: false.
        /// </remarks>
        [JsiiProperty(name: "tracing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tracing
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ServiceMesh`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IServiceMeshProps), fullyQualifiedName: "@alicloud/ros-cdk-asm.ServiceMeshProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Asm.IServiceMeshProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].</summary>
            [JsiiProperty(name: "vSwitches", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitches
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.</summary>
            /// <remarks>
            /// Valid values: true and false. Default value: false.
            /// If you do not set this parameter, the API server of clusters added to the ASM instance
            /// cannot be accessed from the Internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apiServerPublicEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApiServerPublicEip
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property auditProject: The name of the Log Service project that is used for mesh audit.</summary>
            /// <remarks>
            /// Default value: mesh-log-{meshId}.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "auditProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuditProject
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customizedZipkin: Specifies whether to use a user-created Zipkin system.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "customizedZipkin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomizedZipkin
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAudit: Specifies whether to enable the mesh audit feature.</summary>
            /// <remarks>
            /// To enable this feature, make sure
            /// that you have activated Alibaba Cloud Log Service.
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAudit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAudit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "includeIpRanges", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncludeIpRanges
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property istioVersion: The Istio version of the ASM instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "istioVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IstioVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.</summary>
            /// <remarks>
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localityLoadBalancing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalityLoadBalancing
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the ASM instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property opa: OPA settings.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "opa", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty\"}]}}", isOptional: true)]
            public object? Opa
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "outboundTrafficPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OutboundTrafficPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.</summary>
            /// <remarks>
            /// Valid values: true and false. Default value: false.
            /// If you do not set this parameter, only clusters in the same VPC as the ASM instance
            /// can access Istio Pilot of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pilotPublicEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PilotPublicEip
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxy: Proxy settings.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "proxy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty\"}]}}", isOptional: true)]
            public object? Proxy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property telemetry: Specifies whether to enable Prometheus monitoring.</summary>
            /// <remarks>
            /// We recommend that you use Application Real-Time Monitoring Service (ARMS).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "telemetry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Telemetry
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property traceSampling: The sampling percentage of tracing.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "traceSampling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TraceSampling
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tracing: Specifies whether to enable the tracing feature.</summary>
            /// <remarks>
            /// To enable this feature, make sure
            /// that you have activated Alibaba Cloud Tracing Analysis.
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tracing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Tracing
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
