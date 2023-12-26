using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource
{
    /// <summary>Properties for defining a `RosRules`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-pvtz.datasource.RosRulesProps")]
    public class RosRulesProps : AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource.IRosRulesProps
    {
        private object? _endpointId;

        /// <remarks>
        /// <strong>Property</strong>: endpointId: EndpointId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EndpointId
        {
            get => _endpointId;
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
                _endpointId = value;
            }
        }
    }
}
