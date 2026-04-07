using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RosInterRegionTrafficQosPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqospolicy
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosInterRegionTrafficQosPolicyProps")]
    public class RosInterRegionTrafficQosPolicyProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosInterRegionTrafficQosPolicyProps
    {
        private object _transitRouterAttachmentId;

        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentId: The ID of the inter-region connection.
        /// </remarks>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TransitRouterAttachmentId
        {
            get => _transitRouterAttachmentId;
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
                _transitRouterAttachmentId = value;
            }
        }

        private object _transitRouterId;

        /// <remarks>
        /// <strong>Property</strong>: transitRouterId: The ID of the transit router.
        /// </remarks>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TransitRouterId
        {
            get => _transitRouterId;
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
                _transitRouterId = value;
            }
        }

        private object? _bandwidthGuaranteeMode;

        /// <remarks>
        /// <strong>Property</strong>: bandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth. You can specify an absolute bandwidth value or a bandwidth percentage. Valid values:
        /// * byBandwidth: allocates an absolute bandwidth value for the QoS queue.
        /// * byBandwidthPercent (default): allocates a bandwidth percentage for the OoS queue.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidthGuaranteeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? BandwidthGuaranteeMode
        {
            get => _bandwidthGuaranteeMode;
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
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _bandwidthGuaranteeMode = value;
            }
        }

        private object? _interRegionTrafficQosPolicyDescription;

        /// <remarks>
        /// <strong>Property</strong>: interRegionTrafficQosPolicyDescription: The description of the QoS policy. This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "interRegionTrafficQosPolicyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InterRegionTrafficQosPolicyDescription
        {
            get => _interRegionTrafficQosPolicyDescription;
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
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _interRegionTrafficQosPolicyDescription = value;
            }
        }

        private object? _interRegionTrafficQosPolicyName;

        /// <remarks>
        /// <strong>Property</strong>: interRegionTrafficQosPolicyName: The name of the QoS policy. The name can be empty or 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "interRegionTrafficQosPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InterRegionTrafficQosPolicyName
        {
            get => _interRegionTrafficQosPolicyName;
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
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _interRegionTrafficQosPolicyName = value;
            }
        }
    }
}
