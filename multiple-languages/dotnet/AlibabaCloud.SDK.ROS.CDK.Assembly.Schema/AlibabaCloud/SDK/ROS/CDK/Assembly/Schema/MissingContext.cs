using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Represents a missing piece of context.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.MissingContext")]
    public class MissingContext : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMissingContext
    {
        /// <summary>The missing context key.</summary>
        [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
        public string Key
        {
            get;
            set;
        }

        private object _props;

        /// <summary>A set of provider-specific options.</summary>
        [JsiiProperty(name: "props", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AmiContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AvailabilityZonesContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.HostedZoneContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.SSMParameterContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.VpcContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.EndpointServiceAvailabilityZonesContextQuery\"}]}}")]
        public object Props
        {
            get => _props;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAmiContextQuery cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAvailabilityZonesContextQuery cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IHostedZoneContextQuery cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ISSMParameterContextQuery cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IVpcContextQuery cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IEndpointServiceAvailabilityZonesContextQuery cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAmiContextQuery).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAvailabilityZonesContextQuery).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IHostedZoneContextQuery).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ISSMParameterContextQuery).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IVpcContextQuery).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IEndpointServiceAvailabilityZonesContextQuery).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAmiContextQuery).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAvailabilityZonesContextQuery).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IHostedZoneContextQuery).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ISSMParameterContextQuery).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IVpcContextQuery).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IEndpointServiceAvailabilityZonesContextQuery).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _props = value;
            }
        }

        /// <summary>The provider from which we expect this context key to be obtained.</summary>
        [JsiiProperty(name: "provider", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ContextProvider\"}")]
        public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ContextProvider Provider
        {
            get;
            set;
        }
    }
}
