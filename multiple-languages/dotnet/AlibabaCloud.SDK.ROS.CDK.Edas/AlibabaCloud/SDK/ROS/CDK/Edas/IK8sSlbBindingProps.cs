using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `K8sSlbBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sslbbinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IK8sSlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.K8sSlbBindingProps")]
    public interface IK8sSlbBindingProps
    {
        /// <summary>Property appId: The ID of the application.</summary>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppId
        {
            get;
        }

        /// <summary>Property clusterId: The ID of the cluster.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property servicePortInfos: The information about the ports.</summary>
        [JsiiProperty(name: "servicePortInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sSlbBinding.ServicePortInfosProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ServicePortInfos
        {
            get;
        }

        /// <summary>Property type: The type of the SLB instance.</summary>
        /// <remarks>
        /// Valid values: internet and intranet.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property loadBalancerId: The ID of the load balancer instance.</summary>
        /// <remarks>
        /// If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduler: The scheduling algorithm.</summary>
        /// <remarks>
        /// Valid values:
        /// wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
        /// rr: Requests are distributed to backend servers in sequence.
        /// Default value: rr
        /// </remarks>
        [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Scheduler
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property specification: The specification of the load balancer instance.</summary>
        [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Specification
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `K8sSlbBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sslbbinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IK8sSlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.K8sSlbBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IK8sSlbBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appId: The ID of the application.</summary>
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property clusterId: The ID of the cluster.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property servicePortInfos: The information about the ports.</summary>
            [JsiiProperty(name: "servicePortInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sSlbBinding.ServicePortInfosProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ServicePortInfos
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: The type of the SLB instance.</summary>
            /// <remarks>
            /// Valid values: internet and intranet.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property loadBalancerId: The ID of the load balancer instance.</summary>
            /// <remarks>
            /// If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduler: The scheduling algorithm.</summary>
            /// <remarks>
            /// Valid values:
            /// wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
            /// rr: Requests are distributed to backend servers in sequence.
            /// Default value: rr
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scheduler
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property specification: The specification of the load balancer instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Specification
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
