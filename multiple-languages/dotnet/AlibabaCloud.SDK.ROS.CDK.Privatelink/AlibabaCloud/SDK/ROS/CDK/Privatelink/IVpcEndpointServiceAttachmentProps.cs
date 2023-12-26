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

        /// <summary>Property resourceType: The resource type.</summary>
        /// <remarks>
        /// Allowed values:
        ///
        /// <list type="bullet">
        /// <description>slb: indicates a Classic Load Balancer (CLB) instance whose service resource type is a private network and supports the PrivateLink function.</description>
        /// <description>alb: indicates an Application Load Balancer (ALB) instance whose service resources are private networks and which supports the PrivateLink function.</description>
        /// <description>nlb: indicates a Network Load Balancer (NLB) instance that uses private network resources and supports the PrivateLink function.</description>
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

            /// <summary>Property resourceType: The resource type.</summary>
            /// <remarks>
            /// Allowed values:
            ///
            /// <list type="bullet">
            /// <description>slb: indicates a Classic Load Balancer (CLB) instance whose service resource type is a private network and supports the PrivateLink function.</description>
            /// <description>alb: indicates an Application Load Balancer (ALB) instance whose service resources are private networks and which supports the PrivateLink function.</description>
            /// <description>nlb: indicates a Network Load Balancer (NLB) instance that uses private network resources and supports the PrivateLink function.</description>
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
        }
    }
}
