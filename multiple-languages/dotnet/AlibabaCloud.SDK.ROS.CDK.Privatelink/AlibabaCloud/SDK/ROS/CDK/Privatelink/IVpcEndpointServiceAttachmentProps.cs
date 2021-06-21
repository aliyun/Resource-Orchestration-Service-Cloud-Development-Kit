using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`.</summary>
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

        /// <summary>Properties for defining a `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`.</summary>
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
