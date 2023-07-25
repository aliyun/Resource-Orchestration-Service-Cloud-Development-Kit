using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ALB::LoadBalancers`.</summary>
    [JsiiInterface(nativeType: typeof(IRosLoadBalancersProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.datasource.RosLoadBalancersProps")]
    public interface IRosLoadBalancersProps
    {
        /// <remarks>
        /// <strong>Property</strong>: addressType: The address type of the load balancing instance.
        /// </remarks>
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerBussinessStatus: Service status of application load balancing
        /// </remarks>
        [JsiiProperty(name: "loadBalancerBussinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerBussinessStatus
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerIds: IDs of the load balancer instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerNames: Names of the load balancing instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerNames
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerStatus: The status of SLB.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerStatus
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: Load balancing instance payment type
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags of Alb.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-alb.datasource.RosLoadBalancers.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Alb.Datasource.RosLoadBalancers.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcIds: VPC IDs
        /// </remarks>
        [JsiiProperty(name: "vpcIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: ID of the ready-to-use zone of the load balancing instance.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::ALB::LoadBalancers`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosLoadBalancersProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.datasource.RosLoadBalancersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.Datasource.IRosLoadBalancersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: addressType: The address type of the load balancing instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerBussinessStatus: Service status of application load balancing
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerBussinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerBussinessStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerIds: IDs of the load balancer instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LoadBalancerIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerNames: Names of the load balancing instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LoadBalancerNames
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerStatus: The status of SLB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: Load balancing instance payment type
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group id
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags of Alb.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-alb.datasource.RosLoadBalancers.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Alb.Datasource.RosLoadBalancers.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Alb.Datasource.RosLoadBalancers.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcIds: VPC IDs
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? VpcIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: ID of the ready-to-use zone of the load balancing instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
