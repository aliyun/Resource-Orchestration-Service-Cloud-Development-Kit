using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CMS::SlsGroups`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.datasource.RosSlsGroupsProps")]
    public class RosSlsGroupsProps : AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IRosSlsGroupsProps
    {
        private object? _slsGroupName;

        /// <remarks>
        /// <strong>Property</strong>: slsGroupName: The name of the Logstore group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slsGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SlsGroupName
        {
            get => _slsGroupName;
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
                _slsGroupName = value;
            }
        }
    }
}
