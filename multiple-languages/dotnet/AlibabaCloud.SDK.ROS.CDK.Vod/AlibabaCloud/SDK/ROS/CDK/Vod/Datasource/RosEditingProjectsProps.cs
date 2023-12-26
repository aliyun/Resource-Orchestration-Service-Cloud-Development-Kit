using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod.Datasource
{
    /// <summary>Properties for defining a `RosEditingProjects`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vod.datasource.RosEditingProjectsProps")]
    public class RosEditingProjectsProps : AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IRosEditingProjectsProps
    {
        private object? _title;

        /// <remarks>
        /// <strong>Property</strong>: title: The title of the online editing project.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "title", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Title
        {
            get => _title;
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
                _title = value;
            }
        }
    }
}
