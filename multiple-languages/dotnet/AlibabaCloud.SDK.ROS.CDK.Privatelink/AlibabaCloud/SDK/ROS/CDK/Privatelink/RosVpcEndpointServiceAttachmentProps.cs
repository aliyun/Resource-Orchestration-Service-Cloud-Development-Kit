using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Privatelink
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RosVpcEndpointServiceAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointserviceattachment
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceAttachmentProps")]
    public class RosVpcEndpointServiceAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Privatelink.IRosVpcEndpointServiceAttachmentProps
    {
        private object _resourceId;

        /// <remarks>
        /// <strong>Property</strong>: resourceId: The resource id.
        /// </remarks>
        [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ResourceId
        {
            get => _resourceId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceId = value;
            }
        }

        private object _resourceType;

        /// <remarks>
        /// <strong>Property</strong>: resourceType: The resource type. Allowed values:
        /// - slb: indicates a Classic Load Balancer (CLB) instance whose service resource type is a private network and supports the PrivateLink function.
        /// - alb: indicates an Application Load Balancer (ALB) instance whose service resources are private networks and which supports the PrivateLink function.
        /// - nlb: indicates a Network Load Balancer (NLB) instance that uses private network resources and supports the PrivateLink function.
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ResourceType
        {
            get => _resourceType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceType = value;
            }
        }

        private object _serviceId;

        /// <remarks>
        /// <strong>Property</strong>: serviceId: The endpoint service that is associated with the endpoint.
        /// </remarks>
        [JsiiProperty(name: "serviceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ServiceId
        {
            get => _serviceId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _serviceId = value;
            }
        }
    }
}
