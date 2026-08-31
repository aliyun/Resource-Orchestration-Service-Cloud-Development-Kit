using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    /// <summary>Properties for defining a `RosVpcEndpointServiceAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpcEndpointServiceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceAttachmentProps")]
    public interface IRosVpcEndpointServiceAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: resourceId: The resource id.
        /// </remarks>
        [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceType: The type of the service resource. Valid values:
        /// - slb: Classic Load Balancer (CLB).
        /// - alb: Application Load Balancer (ALB).
        /// - nlb: Network Load Balancer (NLB).
        /// - gwlb: Gateway Load Balancer (GWLB).
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceId: The endpoint service that is associated with the endpoint.
        /// </remarks>
        [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone where the service resource is located. This parameter is required if the
        /// service resource is an ALB, NLB, or GWLB instance.
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

        /// <summary>Properties for defining a `RosVpcEndpointServiceAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpcEndpointServiceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Privatelink.IRosVpcEndpointServiceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceId: The resource id.
            /// </remarks>
            [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceType: The type of the service resource. Valid values:
            /// - slb: Classic Load Balancer (CLB).
            /// - alb: Application Load Balancer (ALB).
            /// - nlb: Network Load Balancer (NLB).
            /// - gwlb: Gateway Load Balancer (GWLB).
            /// </remarks>
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceId: The endpoint service that is associated with the endpoint.
            /// </remarks>
            [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The zone where the service resource is located. This parameter is required if the
            /// service resource is an ALB, NLB, or GWLB instance.
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
