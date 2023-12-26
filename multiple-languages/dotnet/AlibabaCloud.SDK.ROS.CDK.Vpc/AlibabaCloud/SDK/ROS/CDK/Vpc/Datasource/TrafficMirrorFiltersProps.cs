using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `TrafficMirrorFilters`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.datasource.TrafficMirrorFiltersProps")]
    public class TrafficMirrorFiltersProps : AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ITrafficMirrorFiltersProps
    {
        private object? _trafficMirrorFilterName;

        /// <summary>Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "trafficMirrorFilterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TrafficMirrorFilterName
        {
            get => _trafficMirrorFilterName;
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
                _trafficMirrorFilterName = value;
            }
        }
    }
}
