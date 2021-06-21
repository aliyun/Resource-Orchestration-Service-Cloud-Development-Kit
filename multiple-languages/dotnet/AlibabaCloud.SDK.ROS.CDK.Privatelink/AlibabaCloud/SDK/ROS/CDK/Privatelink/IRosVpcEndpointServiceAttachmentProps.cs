using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`.</summary>
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
        /// <strong>Property</strong>: resourceType: The resource type.
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

        /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`.</summary>
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
            /// <strong>Property</strong>: resourceType: The resource type.
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
        }
    }
}
