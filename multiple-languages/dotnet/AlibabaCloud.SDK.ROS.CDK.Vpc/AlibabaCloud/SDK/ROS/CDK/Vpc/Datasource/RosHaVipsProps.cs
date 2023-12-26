using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosHaVips`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.datasource.RosHaVipsProps")]
    public class RosHaVipsProps : AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosHaVipsProps
    {
        private object? _haVipId;

        /// <remarks>
        /// <strong>Property</strong>: haVipId: The  ID of the resource
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HaVipId
        {
            get => _haVipId;
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
                _haVipId = value;
            }
        }
    }
}
