using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `DATASOURCE::FNF::Schedules`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fnf.datasource.SchedulesProps")]
    public class SchedulesProps : AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.ISchedulesProps
    {
        private object _flowName;

        /// <summary>Property flowName: The name of the flow that is bound to the time-based schedule.</summary>
        /// <remarks>
        /// The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
        /// The name can contain letters, digits, underscores (<em>), and hyphens (-).
        /// The name must start with a letter or an underscore (</em>).
        /// The name is case-sensitive.
        /// The name must be 1 to 128 characters in length.
        /// </remarks>
        [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object FlowName
        {
            get => _flowName;
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
                _flowName = value;
            }
        }
    }
}
