using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    /// <summary>Properties for defining a `VpcEndpointServiceAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVpcEndpointServiceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.VpcEndpointServiceAttachmentProps")]
    public interface IVpcEndpointServiceAttachmentProps
    {
        /// <summary>Property resourceId: The resource id.</summary>
        [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceId
        {
            get;
        }

        /// <summary>Property resourceType: The type of the service resource.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>slb: Classic Load Balancer (CLB).</description>
        /// <description>alb: Application Load Balancer (ALB).</description>
        /// <description>nlb: Network Load Balancer (NLB).</description>
        /// <description>gwlb: Gateway Load Balancer (GWLB).</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceType
        {
            get;
        }

        /// <summary>Property serviceId: The endpoint service that is associated with the endpoint.</summary>
        [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceId
        {
            get;
        }

        /// <summary>Property zoneId: The zone where the service resource is located.</summary>
        /// <remarks>
        /// This parameter is required if the
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

        /// <summary>Properties for defining a `VpcEndpointServiceAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVpcEndpointServiceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-privatelink.VpcEndpointServiceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Privatelink.IVpcEndpointServiceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property resourceId: The resource id.</summary>
            [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceType: The type of the service resource.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>slb: Classic Load Balancer (CLB).</description>
            /// <description>alb: Application Load Balancer (ALB).</description>
            /// <description>nlb: Network Load Balancer (NLB).</description>
            /// <description>gwlb: Gateway Load Balancer (GWLB).</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceId: The endpoint service that is associated with the endpoint.</summary>
            [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: The zone where the service resource is located.</summary>
            /// <remarks>
            /// This parameter is required if the
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
